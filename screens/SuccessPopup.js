import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Button, Center, Text, View, Image } from 'native-base';

const SuccessPopup = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const showPopup = () => {
        setIsVisible(true);
    };

    const hidePopup = () => {
        setIsVisible(false);
    };

    const handleSuccess = () => {
        showPopup();
        
    };

    return (
        <View style={{paddingTop: 300}}>
            <Button onPress={handleSuccess}>
                <Text>Confirmation</Text>
            </Button>

            {isVisible && (
                <View style={{padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, paddingLeft: 150 }}>Success!</Text>
                    <Text style= {{ paddingLeft: 150}}>{props.message || 'App#101010'}</Text>
                    <Text style= {{ paddingHorizontal: 80}}>{props.message || 'Appointment ID : QWERTY121414'}</Text>
                    <Text style= {{ paddingHorizontal: 84, fontWeight: 'bold'}}>{props.message || 'APPOINTMENT HAS BEEN SET'}</Text>
                    <Text style= {{ paddingHorizontal: 110, paddingTop: 10}}>{props.message || '09.00 AM | October 18'}</Text>
                    <Text style= {{ paddingLeft: 150, fontWeight: 'bold'}}>{props.message || 'Dr. Jane Doe'}</Text>
                    <Button onPress={hidePopup} style={{ marginTop: 10 }}>
                        <Text>Back</Text>
                    </Button>
                </View>
            )}
        </View>
    );
};

export default SuccessPopup;
