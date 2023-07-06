# react-native-animated-button

React Native customizable component for implements a progress stepper UI.

## Installation

If using yarn:

```
yarn add react-native-animated-button
```

If using npm:

```
npm i react-native-animated-button
```

## Usage

```
import { AnimatedButton } from 'react-native-animated-button';
```

Simply place a `<AnimatedButton />` .

```
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <AnimatedButton />
</View>
```

### Animated Button Component
| Name                       | Default     | Type    |
|----------------------------|-------------|---------|
| isDisabled                 | false       | boolean  |
| buttonDisabledStyles           | { alignItems: 'center', justifyContent: 'center', paddingVertical: 15, borderRadius: 8, backgroundColor: '#808080cf', }       | object  |
| buttonStyles                   | { borderRadius: 8, backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }       | object  |
| buttonTextStyles               | { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }       | object  |
| buttonDisabledTextStyles       | { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }       | object  |
| delayLongPress                 | 500       | number  |
| onLongPress                    | () => {}       | function: () => {}  |
| onHoverIn                      | () => {}       | function: () => {}  |
| onHoverOut                     | () => {}       | function: () => {}  |
| pressRetentionOffset           | () => {}       | function: () => {}  |
| onPress                        | () => {}       | function: () => {}  |
| buttonTitle                    | button       | String  |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Govinda Biswas | React & React-Native Developer
