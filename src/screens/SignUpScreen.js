import {Component} from "react";
import {Text, KeyboardAvoidingView, StyleSheet, View} from "react-native";
import React from "react";
import tForm from 'tcomb-form-native';
import Button from 'react-native-button';

// Form and User initialize the user input fields.
const Form = tForm.form.Form;
const User = tForm.struct({
    name: tForm.String,
    e_mail: tForm.String,
    phoneNumber: tForm.maybe(tForm.String),
    password: tForm.String,
    verify_password: tForm.String
});

export default class SignUpScreen extends Component {
    // Constructor initializes name, phoneNumber, houseID, and houseName to "".
    constructor(props) {
        super(props);
        this.state = { name: "", e_mail: "", phoneNumber: "", password:  "", verify_password: "" };
        this.onChange=this.onChange.bind(this);
    }

    // Rids the sign up screen of the navigation bar that comes standard with 'react-navigation'.
    static navigationOptions = {
        header: null
    };

    /**
     * handleSubmit()
     * When the "Sign Up" button is pressed, this function is called.
     * It grabs the values in all input boxes and prints them to the console.
     * Then proceeds to the next screen if no values were null.
      */

    handleSubmit_SignUp = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        if (value) {
            this.props.navigation.navigate("HouseSetup");
        }
    };

    onChange(value) {
        this.setState({value});
    };

    /**
     * render()
     * Layout for the sign up screen.
     * TODO: The 'KeyboardAvoidingView' can potentially block the sign up button.
     * WARNING! Image path may need to be updated depending on directory hierarchy.
     * @returns {Layout}
     */
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <View style={[styles.box_SubContainer]}>
                        <View style={[styles.box_Title]}>
                            <Text style={styles.text_Title}>Sign Up</Text>
                            <Text style={styles.text_SubTitle}>It's free and only takes a minute.</Text>
                        </View>
                        <View style={[styles.box_Form]}>
                            <Form ref={c => this._form = c}
                                  type={User}
                                  value={this.state.value}
                                  onChange={this.onChange}
                                  options={options}/>
                            <Button style={{fontSize: 14, color: 'white', justifyContent: 'center', alignSelf: 'center'}}
                                    onPress={this.handleSubmit_SignUp}
                                    containerStyle={{ padding: 11, height: 45, overflow: 'hidden', borderRadius: 4,
                                        backgroundColor: '#415180' }}>
                                SIGN UP
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
            color: '#415180',
            fontSize: 14,
            fontWeight: 'bold'
        },
        error: {
            color: 'red',
            fontSize: 14,
            fontWeight: 'bold'
        }
    },
    textbox: {
        normal: {
            color: '#415180',
            borderWidth: 1,
            borderColor:'#415180',
            borderRadius: 4,
            height: 36,
            marginBottom: 5
        },
        error: {
            color: '#415180',
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
        name: {
            label: 'Name:'
        },
        phoneNumber: {
            label: 'Phone Number:'
        },
        e_mail: {
            label: 'Email:'
        },
        password: {
            label: 'Password:'
        },
        verify_password: {
            label: 'Verify Password:'
        }
    },
    stylesheet: formStyles,
};

// StyleSheet for the sign up screen.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#283350',
        paddingLeft: 16,
        paddingRight: 16,
        // This field can be changed to adjust style.
        paddingTop: 0,
    },
    box_SubContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    box_Title: {
        flex: 3,
        marginTop: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    box_Form: {
        flex: 10,
        backgroundColor: 'transparent',
        padding: 20,
        justifyContent: 'center'
    },
    text_Title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#415180'
    },
    text_SubTitle: {
        color: '#415180',
        fontSize: 16
    },
});
