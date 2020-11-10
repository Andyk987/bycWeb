import React, { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const GET_FACEBOOKLOGOUT = gql`
    mutation checkFacebookLogout($email: String!) {
        checkFacebookLogout(email: $email) {
            isLogin
            isFacebookLogin
        }
    }
`

const FacebookLogin = (props) => {
    
    const [cookies, setCookie, removeCookie] = useCookies(['email']);
    const [facebookLogout] = useMutation(GET_FACEBOOKLOGOUT);
    
    useEffect(() => {
        FBinit();
        loadFBSDK();
    })
    
    const FBinit = () => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: "711386792786339",
                autoLogAppEvents: true,
                xfbml: true,
                version: "v8.0"
            }, [])
        }
    }
    
    const loadFBSDK = () => {
        (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/ko_KR/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }
    
    const facebookLogin = () => {
        window.FB.login((response) => {
            if(response.authResponse) {
                console.log("Loading!...");
                window.FB.api('/me', { fields: ['email', 'name', 'picture'] }, (response) => {
                    const facebookUser = [response.id, response.email, response.name, response.picture.data.url];
                    saveUser.apply(this, facebookUser)
                });
            } else {
                console.log("Error");
            }
        }, {scope: 'public_profile,email'})
        
    };
    
    const saveUser = (id, email, name, avatarUrl) => {
        axios({
            method: 'post',
            url: 'https://graphql-api.run.goorm.io/login/facebook',
            data: {
                id: id,
                email: email,
                name: name,
                avatarUrl: avatarUrl
            }
        })
        .then(res => {
            setCookie('email', email, { path: '/', secure: true });
            window.location.replace('/');
        })
    }
    
    const checkLogin = () => {
        window.FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                window.FB.logout((response) => {
                })
                facebookLogout({ variables: { email: cookies.email } });
                removeCookie('email');
                window.location.replace('/');
            }
        })
    }
    
    
    
    return (
        <div>
            {props.login ?
                <button onClick={facebookLogin}>Facebook Login</button> : 
                <button onClick={checkLogin}>check</button>
            }
        </div>
    )
};

export default FacebookLogin;