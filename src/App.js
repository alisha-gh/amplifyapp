import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState } from 'react';
import './App.css';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { listNotes } from './graphql/queries';
import Amplify, { API, Storage, Auth } from 'aws-amplify';
import { NavBar } from './ui-components';
import { Authenticator } from '@aws-amplify/ui-react';

const initialFormState = { name: '', description: '' }
// const user =  await Auth.currentAuthenticatedUser();
// the array of groups that the user belongs to
// user.signInUserSession.accessToken.payload["cognito:groups"]


class Dashboard extends React.Component {
  render() {
    const signUpConfig = {
        signUpFields: [
            {
                label: "Role",
                key: "custom:Role",
                placeholder: "Driver/Customer",
                required: true,
                displayOrder: 5
            }
        ]
    };
    return <Authenticator signUpConfig={signUpConfig} />;
  }
}
  function App({ signOut }) {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState); 
    const navbarOVerrides = {
      "Button": {
        onClick: signOut
      },
      "image": {
        src: "https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-User-interface-those-icons-lineal-those-icons-2.png",
      }
    }
    useEffect(() => {
      fetchNotes();
    }, []);
  
    async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
    }
  
    async function fetchNotes() {
      const apiData = await API.graphql({ query: listNotes });
      const notesFromAPI = apiData.data.listNotes.items;
      await Promise.all(notesFromAPI.map(async note => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      }))
      setNotes(apiData.data.listNotes.items);
    }
    async function createNote() {
      if (!formData.name || !formData.description) return;
      await API.graphql({ query: createNoteMutation, variables: { input: formData } });
      if (formData.image) {
        const image = await Storage.get(formData.image);
        formData.image = image;
      }
      setNotes([ ...notes, formData ]);
      setFormData(initialFormState);
    }
  
    async function deleteNote({ id }) {
      const newNotesArray = notes.filter(note => note.id !== id);
      setNotes(newNotesArray);
      await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
    }
    return (
      <div className="App">
        <NavBar overrides={navbarOVerrides} width="100%"/>
        <h1>Welcome to Nüber</h1>
        <p>Upload files for identification check</p>
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value})}
          placeholder="File name"
          value={formData.name}
        />
        <input
          onChange={e => setFormData({ ...formData, 'description': e.target.value})}
          placeholder="File description"
          value={formData.description}
        />
        <input
          type="file"
          onChange={onChange}
        />
        <button onClick={createNote}>Create Note</button>
        <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
              {
                note.image && <img src={note.image} style={{width: 400}} />
              }
            </div>
          ))
        }
        </div>
        </div>
    );
  }



export default withAuthenticator(App);