import {Component} from "react";
import { Image, KeyboardAvoidingView, StyleSheet, View} from "react-native";
import Button from 'react-native-button';
import React from "react";
import tForm from 'tcomb-form-native';

// Form and User initialize the user input fields.
const Form = tForm.form.Form;
const User = tForm.struct({
    e_mail: tForm.String,
    password: tForm.String
});

export default class WelcomeScreen extends Component {
    // Constructor initializes name, phoneNumber, houseID, and houseName to "".
    constructor(props) {
        super(props);
        this.state = { e_mail: "", password: "" };
        this.onChange=this.onChange.bind(this);
    }

    // Rids the sign up screen of the navigation bar that comes standard with 'react-navigation'.
    static navigationOptions = {
        header: null
    };

    /**
     * handleSubmit_LogIn()
     * When the "LOG IN" button is pressed, this function is called.
     * It grabs the values in all input boxes and prints them to the console.
     * Then proceeds to the next screen if no values were null.
     * TODO: Update database with given values.
     */
    handleSubmit_LogIn = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        // If password and email match database, log in.
        if (value) {
            this.props.navigation.navigate("TabNavigation");
        }
    };

    /**
     * handleSubmit_SignUp()
     * When the "Sign Up" button is pressed, this function is called.
     * It simply proceeds to the sign up screen.
     */
    handleSubmit_SignUp = () => {
        this.props.navigation.navigate("SignUp")
    };

    /**
     * onChange()
     * When a value is changed in one of the fields, this allows the information to remain present even after
     * the screen refreshes.
     * @param value
     */
    onChange(value) {
        this.setState({value});
    };

    /**
     * render()
     * Layout for the sign up screen.
     * WARNING! Image path may need to be updated depending on directory hierarchy.
     * @returns {Layout}
     */
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style = {styles.container}>
                    <View style={[styles.box_Logo]}>
                        <Image style={{flex:1, height:undefined, width:undefined}}
                               source={require("../assets/HouseMatesPNGLogo_dirtySlogan_ovalBackground.png")}
                               resizeMode="contain"/>
                    </View>
                    <View style={[styles.box_Form]}>
                        <Form ref={c => this._form = c}
                              type={User}
                              value={this.state.value}
                              onChange={this.onChange}
                              options={options}/>
                        <Button style={{fontSize: 14, color: 'white', alignSelf: 'center'}}
                                onPress={this.handleSubmit_LogIn}
                                containerStyle={{ padding: 8, height: 38, overflow: 'hidden', borderRadius: 2,
                                    backgroundColor: '#415180' }}>
                            LOG IN
                        </Button>
                    </View>
                    <View style={{paddingBottom: 0}}>
                        <Button style={{fontSize: 14, color: 'white', justifyContent: 'center', alignSelf: 'center'}}
                                onPress={this.handleSubmit_SignUp}
                                containerStyle={{ padding: 14, height: 55, overflow: 'hidden', borderRadius: 0,
                                    backgroundColor: '#415180' }}>
                            NO ACCOUNT? SIGN UP!
                        </Button>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// The following edits the style of the form. This format is required for the API.
const formStyles = {
    ...Form.stylesheet,
    //
    controlLabel: {
        normal: {
            color: 'white',
            fontSize: 14
        },
        error: {
            color: 'red',
            fontSize: 14
        }
    },
    textbox: {
        normal: {
            color: 'white',
            borderWidth: 1,
            borderColor:'#415180',
            borderRadius: 4,
            height: 36,
            marginBottom: 5
        },
        error: {
            color: 'white',
            borderWidth: 1,
            borderColor:'#415180',
            height: 36,
            marginBottom: 5
        }
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    button: {
        backgroundColor: '#ffd344',
        borderWidth: 1,
        borderRadius: 8,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
};

// The following edits the fields of the form. This format is required for the API.
const options = {
    fields: {
        e_mail: {
            label: 'Email:'
        },
        password: {
            label: 'Password:'
        },
    },
    stylesheet: formStyles,
};

// StyleSheet for the sign up screen.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#283350'
    },
    box_Logo: {
        flex: 4,
        marginTop: 60,
        justifyContent: 'flex-end',
        backgroundColor: '#283350'

    },
    box_Form: {
        flex: 4,
        backgroundColor: '#283350',
        padding: 20,
        justifyContent: 'flex-end',

    },
    text_Welcome: {
        color: '#ffd344',
        fontSize: 25,
        letterSpacing: 4,
        alignSelf: 'center'
    },
});