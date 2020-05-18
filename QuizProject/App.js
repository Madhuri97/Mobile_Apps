import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';
import {CheckBox} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';  
import { NavigationContainer } from '@react-navigation/native';  
import styled from 'styled-components';

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(){
    super();
    global.count = 0
  }

  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="quiz">
        <Stack.Screen name="quiz" component={Quiz} />
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="Question4" component={Question4} />
        <Stack.Screen name="Question5" component={Question5} />
        <Stack.Screen name="Question6" component={Question6} />
        <Stack.Screen name="Question7" component={Question7} />
        <Stack.Screen name="Question8" component={Question8} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
     </NavigationContainer>
    );
  }
}

class Quiz extends Component {
  
  startQuizAlert = () =>
    Alert.alert(
      "Instructions",
      "1. The quizzes consists of self-assess your comprehension questions on the information presented on the topics covered in the module. there wont be count regarding your responses or how many times you take the quiz. 2.After responding to a question, click on the 'Next Question' button at the bottom to go to the next questino. After responding to the 8th question, click on 'Close' on the top of the window to exit the quiz.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Start", onPress: () => this.props.navigation.navigate('Question1') }
      ],
      { cancelable: false }
    );

  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Quiz App</Text>
        <Button 
          title="Take Quiz" 
          color="#f194ff" 
          onPress={this.startQuizAlert}
        />
      </View>
    );
  }
}

  
class Question1 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>1. What is ReactNative</Text>
              <CheckBox
                title="Server side Framework"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="User-interface framework"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <CheckBox
                title="A Library for building interaction interfaces for mobile"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 }, () => {global.count += 1})}
              />
              <CheckBox
                title="None of These"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question2')}
              />
          </View>  
  );  
  }  
}

class Question2 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>2. Everything in React is a___</Text>
              <CheckBox
                title="Module"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="Component"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2}, () => global.count += 1)}
              />
              <CheckBox
                title="Package"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
              <CheckBox
                title="Class"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question3')}
              />
          </View>  
  );  
  }  
}

class Question3 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>3. How many elements does a react component return?</Text>
              <CheckBox
                title="2 Elements"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="1 Element"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <CheckBox
                title="Multiple Elements"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3}, () => global.count += 1)}
              />
              <CheckBox
                title="None of These"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question4')}
              />
          </View>  
  );  
  }  
}

class Question4 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>4. What are the two ways that data gets handled in React?</Text>
              <CheckBox
                title="state and props"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 }, () => global.count += 1)}
              />  
              <CheckBox
                title="services and components"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question5')}
              />
          </View>  
  );  
  }  
}

class Question5 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>5. In React what is used to pass data to a component from outside?</Text>
              <CheckBox
                title="setState"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="render with arguments"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <CheckBox
                title="props"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 }, () => global.count += 1)}
              />
              <CheckBox
                title="PropTypes"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question6')}
              />
          </View>  
  );  
  }  
}

class Question6 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>6. Who Develop React Native?</Text>
              <CheckBox
                title="Apple"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="Facebook"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 }, () => global.count += 1)}
              />
              <CheckBox
                title="Twitter"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
              <CheckBox
                title="Google"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question7')}
              />
          </View>  
  );  
  }  
}

class Question7 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>7. How can you access the state of a component from inside of a member function?</Text>
              <CheckBox
                title="this.getState()"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 })}
              />  
              <CheckBox
                title="this.values"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 }, () => global.count += 1)}
              />
              <CheckBox
                title="this.prototype.stateValue"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
              <CheckBox
                title="this.state"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="Next Question" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Question8')}
              />
          </View>  
    );  
  }  
}

class Question8 extends Component {  
  state = {
    checked1: false,
    checked2: false, 
    checked3: false,
    checked4: false,
  };
  render() {  
      return (  
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
              <Text>Author for React Native</Text>
              <CheckBox
                title="Jordan Walke"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                checked={this.state.checked1}
                onPress={() => this.setState({ checked1: !this.state.checked1 }, () => global.count += 1)}
              />  
              <CheckBox
                title="Tim Berners-Lee"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked2}
                onPress={() => this.setState({ checked2: !this.state.checked2 })}
              />
              <CheckBox
                title="Lie Bert Bos"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked3}
                onPress={() => this.setState({ checked3: !this.state.checked3 })}
              />
              <CheckBox
                title="Mark Otto"
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='red'
                checked={this.state.checked4}
                onPress={() => this.setState({ checked4: !this.state.checked4 })}
              />
              <Button 
                title="End Quiz" 
                color="#f194ff" 
                onPress={() => this.props.navigation.navigate('Score')}
              />
          </View>  
  );  
  }  
}

class Score extends Component { 
  render() {
    return(
      <View>
        <Text>Completed quiz</Text>
        <Text>Your Score:) {global.count} </Text>
        <Button 
          title="Home" 
          color="#f194ff" 
          onPress={() => this.props.navigation.navigate('quiz')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:25,
  },
});


// The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.

// Each question in the quiz is of multiple-choice or "true or false" format. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module. Each correct or incorrect response will result in appropriate feedback immediately at the bottom of the screen.

// After responding to a question, click on the "Next Question" button at the bottom to go to the next questino. After responding to the 8th question, click on "Close" on the top of the window to exit the quiz.

// If you select an incorrect response for a question, you can try again until you get the correct response. If you retake the quiz, the questions and their respective responses will be randomized.

// The total score for 
// The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question or retake a question again and get the correct response, your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.
