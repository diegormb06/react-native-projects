import React from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules
} from 'react-native';

NativeModules.UIManager.setLayoutAnimationEnabledExperimental && NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: true };
  }

  toggleCollapse() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  render() {
    const { label ='', content='' } = this.props;
    const { collapse } = this.state;
    return (
      <View style={styles.details}>
        <Text style={styles.label}>{label}:</Text>
        <TouchableWithoutFeedback onPress={() => this.toggleCollapse()} >
          <View>
            <Text style={[styles.content, collapse ? styles.collapsed : styles.expanded]}>{content}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  details: {
    marginBottom: 15
  },
  label: {
    flex: 2,
    fontWeight: 'bold',
    marginVertical: 2
  },
  content: {
    flex: 5,
    textAlign: 'justify'
  },
  collapsed: {
    maxHeight: 65
  },
  expanded: {
    flex: 1
  }
});
