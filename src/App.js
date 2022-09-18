import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { listNotes } from './graphql/queries';
import Amplify, { API, Storage, Auth } from 'aws-amplify';
import { NavBar } from './ui-components';
import { Authenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { async } from 'q';
import { Type } from '@sinclair/typebox';
import { AccountContext } from './Accounts';


const initialFormState = { name: '', description: '' }


function App({ signOut }) {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState); 
    const {getSession} = useContext(AccountContext);
    const addToDrivers =  event => {
      event.preventDefault();
      getSession().then(({ user }) => {
        const addUserParams = {
          GroupName: "drivers",
          UserPoolId: user.pool.userPoolId,
          Username: user.username,
        };
        const auth = {
          region: "us-west-2",
          apiVersion: "2016-04-18",
          accessKeyId: 'AKIAUVELU2E6CWG6FA5M',
          secretAccessKey: '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',
        };
        console.log(user);
        const aws = require('aws-sdk');
        aws.config.update({region:'us-west-2'});
        const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider(auth);
        cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
      })
    }
    const addToCustomers =  event => {
      event.preventDefault();
      getSession().then(({ user }) => {
        const addUserParams = {
          GroupName: "customers",
          UserPoolId: user.pool.userPoolId,
          Username: user.username,
        };
        const auth = {
          region: "us-west-2",
          apiVersion: "2016-04-18",
          accessKeyId: 'AKIAUVELU2E6CWG6FA5M',
          secretAccessKey: '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',
        };
        console.log(user);
        const aws = require('aws-sdk');
        aws.config.update({region:'us-west-2'});
        const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider(auth);
        cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
      })
    }

    const navbarOVerrides = {
      "Dashboard": {
        src: "https://master.d3vghvtq5r5rls.amplifyapp.com"
      },
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
        <Router>
          <NavLink exact activeClassName="active" to="/">Home</NavLink> 
          <Routes>
            <Route path="/" element={
              <div>
                  <h1>Welcome to Nüber</h1>
                  <button onClick={addToCustomers}>Become a Customer</button>
              </div>
            }></Route>
            <Route path="/group" element={
              <div>
                <h1>Welcome to Nüber</h1>
                <p>Upload files for identification check</p>
                <input
                  onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                  placeholder="File name"
                  value={formData.name}
                />
                <br></br>
                <br></br>
                <input
                  onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                  placeholder="File description"
                  value={formData.description}
                />
                <br></br>
                <br></br>
                <input
                  type="file"
                  onChange={onChange}
                />
                <br></br>
                <br></br>
                <button onClick={createNote}>Save</button>
                <br></br>
                <br></br>
                <div style={{marginBottom: 30}}>
                {
                  notes.map(note => (
                    <div key={note.id || note.name}>
                      <h2>{note.name}</h2>
                      <p>{note.description}</p>
                      <br></br>
                      {
                        note.image && <img src={note.image} style={{width: 400}} />
                      }
                      <br></br>
                      <br></br>
                      <button onClick={() => deleteNote(note)}>Delete note</button>
                    </div>
                  ))
                }
                </div>
                <button onClick={addToDrivers}>Apply</button>

              </div>
            }></Route>
          </Routes>
              <div>
              <br></br>
              <NavLink activeClassName="active" to="/group">Become a Driver</NavLink>
            </div>
        </Router>        
      </div>         
  );
  
  }
export default withAuthenticator(App);