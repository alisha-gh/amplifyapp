/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, Image, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="18px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          paths={[
            {
              d: "M5.99007 4.09244L5.81788 5.07751L5.99007 4.09244ZM2.6718 5.07581L1.74975 5.46288L2.6718 5.07581ZM3.54571 7.15757L2.62367 7.54464L3.54571 7.15757ZM1.98638 11.5009L1.71412 12.4631L1.98638 11.5009ZM1.59585 9.78987L2.25865 10.5387L1.59585 9.78987ZM4.88526 13.0265L3.88658 13.0778L4.88526 13.0265ZM4.15884 12.1156L4.4311 11.1534L4.15884 12.1156ZM6.58236 16.0427L5.99981 15.2299L6.58236 16.0427ZM9.58254 14.7275L10.1651 13.9147L9.58254 14.7275ZM8.41746 14.7275L7.83492 13.9147L8.41746 14.7275ZM12.9989 15.2813L13.9976 15.3326L12.9989 15.2813ZM11.4176 16.0427L12.0002 15.2299L11.4176 16.0427ZM14.234 3.70368L14.0618 2.71861L14.234 3.70368ZM15.3282 5.07581L14.4061 4.68874L15.3282 5.07581ZM12.0099 4.09244L11.8377 3.10738L12.0099 4.09244ZM9.87751 1.60573L9 2.08528L9.87751 1.60573ZM9 2.08528L10.0827 4.06649L11.8377 3.10738L10.755 1.12617L9 2.08528ZM12.1821 5.07751L14.4061 4.68874L14.0618 2.71861L11.8377 3.10738L12.1821 5.07751ZM14.4061 4.68874L13.5322 6.7705L15.3763 7.54464L16.2502 5.46289L14.4061 4.68874ZM14.0507 9.04225L15.7414 10.5387L17.0669 9.04107L15.3763 7.54464L14.0507 9.04225ZM15.7414 10.5387L13.5689 11.1534L14.1134 13.0778L16.2859 12.4631L15.7414 10.5387ZM12.1161 12.9752L12.0002 15.2299L13.9976 15.3326L14.1134 13.0778L12.1161 12.9752ZM12.0002 15.2299L10.1651 13.9147L9 15.5403L10.8351 16.8555L12.0002 15.2299ZM7.83492 13.9147L5.99981 15.2299L7.1649 16.8555L9 15.5403L7.83492 13.9147ZM5.99981 15.2299L5.88394 12.9752L3.88658 13.0778L4.00245 15.3326L5.99981 15.2299ZM4.4311 11.1534L2.25865 10.5387L1.71412 12.4631L3.88658 13.0778L4.4311 11.1534ZM2.25865 10.5387L3.94925 9.04225L2.62367 7.54464L0.933057 9.04107L2.25865 10.5387ZM4.46776 6.7705L3.59385 4.68874L1.74975 5.46288L2.62367 7.54464L4.46776 6.7705ZM3.59385 4.68874L5.81788 5.07751L6.16226 3.10738L3.93824 2.71861L3.59385 4.68874ZM7.91729 4.06648L9 2.08528L7.24497 1.12617L6.16226 3.10738L7.91729 4.06648ZM5.81788 5.07751C6.66201 5.22506 7.50635 4.81845 7.91729 4.06648L6.16226 3.10738L6.16226 3.10738L5.81788 5.07751ZM3.59385 4.68874L3.59385 4.68874L3.93824 2.71861C2.38028 2.44628 1.13757 4.00459 1.74975 5.46288L3.59385 4.68874ZM3.94925 9.04225C4.59093 8.47428 4.79946 7.56063 4.46776 6.7705L2.62367 7.54464L2.62367 7.54464L3.94925 9.04225ZM2.25865 10.5387L2.25865 10.5387L0.933057 9.04107C-0.251235 10.0893 0.192282 12.0325 1.71412 12.4631L2.25865 10.5387ZM5.88394 12.9752C5.83996 12.1194 5.25566 11.3867 4.4311 11.1534L3.88658 13.0778L3.88658 13.0778L5.88394 12.9752ZM5.99981 15.2299L5.99981 15.2299L4.00245 15.3326C4.08362 16.9121 5.87939 17.7769 7.1649 16.8555L5.99981 15.2299ZM10.1651 13.9147C9.46857 13.4155 8.53143 13.4155 7.83492 13.9147L9 15.5403L9 15.5403L10.1651 13.9147ZM12.0002 15.2299L12.0002 15.2299L10.8351 16.8555C12.1206 17.7769 13.9164 16.9121 13.9976 15.3326L12.0002 15.2299ZM13.5689 11.1534C12.7443 11.3867 12.16 12.1194 12.1161 12.9752L14.1134 13.0778L14.1134 13.0778L13.5689 11.1534ZM15.7414 10.5387L15.7414 10.5387L16.2859 12.4631C17.8077 12.0325 18.2512 10.0893 17.0669 9.04107L15.7414 10.5387ZM13.5322 6.7705C13.2005 7.56063 13.4091 8.47428 14.0507 9.04225L15.3763 7.54464L15.3763 7.54464L13.5322 6.7705ZM14.4061 4.68874L14.4061 4.68874L16.2502 5.46289C16.8624 4.00459 15.6197 2.44628 14.0618 2.71861L14.4061 4.68874ZM10.0827 4.06649C10.4937 4.81845 11.338 5.22506 12.1821 5.07751L11.8377 3.10738L11.8377 3.10738L10.0827 4.06649ZM10.755 1.12617C9.99657 -0.261686 8.00343 -0.261687 7.24497 1.12617L9 2.08528L9 2.08528L10.755 1.12617Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
            {
              d: "M8.12249 1.60573C8.50171 0.911796 9.49829 0.911796 9.87751 1.60573L10.9602 3.58693C11.1657 3.96292 11.5879 4.16622 12.0099 4.09244L14.234 3.70368C15.0129 3.56751 15.6343 4.34666 15.3282 5.07581L14.4543 7.15757C14.2884 7.55264 14.3927 8.00946 14.7135 8.29344L16.4041 9.78987C16.9963 10.314 16.7745 11.2856 16.0136 11.5009L13.8412 12.1156C13.4289 12.2323 13.1367 12.5986 13.1147 13.0265L12.9989 15.2813C12.9583 16.071 12.0604 16.5034 11.4176 16.0427L9.58254 14.7275C9.23429 14.4779 8.76571 14.4779 8.41746 14.7275L6.58236 16.0427C5.9396 16.5034 5.04172 16.071 5.00113 15.2813L4.88526 13.0265C4.86327 12.5986 4.57112 12.2323 4.15884 12.1156L1.98638 11.5009C1.22546 11.2856 1.0037 10.314 1.59585 9.78987L3.28646 8.29344C3.6073 8.00946 3.71156 7.55264 3.54571 7.15757L2.6718 5.07581C2.36571 4.34666 2.98706 3.56751 3.76604 3.70368L5.99007 4.09244C6.41214 4.16622 6.83431 3.96292 7.03978 3.58693L8.12249 1.60573Z",
              fill: "rgba(11,75,121,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="400"
          color="rgba(11,75,121,1)"
          textTransform="capitalize"
          lineHeight="23.4375px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Nüber"
          {...getOverrideProps(overrides, "N\u00FCber")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        width="628px"
        alignItems="center"
        grow="1"
        basis="628px"
        height="24px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        {/* <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Dashboard"
          {...getOverrideProps(overrides, "Dashboard")}
        ></Text> */}
      </Flex>
      <Flex
        gap="32px"
        width="628px"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        basis="628px"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="42px"
          position="relative"
          border="1px SOLID rgba(174,179,183,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Sign Out"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
