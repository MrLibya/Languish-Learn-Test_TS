# Languish-Learn-Test_TS
This is just first version of thet pokedex app, it still incomplete !
It has been only tested on ios, it will require few modification to run on android

# Firestone
Firebase firestone database was used with this app
<img src="/demo/firestone.png" width="400" height="250">

### Scheme:
```
English: Array of strings (words) for the whole sentence
EnglishTrIndex: index of the word that needed to be translate
German:  Array of strings (words) for the whole sentence in german languish, with leaving empty string for the word need to be translate
answer: string of the correct answer
options: Array of strings of options to give to the user (it must contain the correct answer as well)
```


# Demo

<img src="/demo/1.png" width="250"> 
<img src="/demo/2.png" width="250"> <img src="/demo/3.png" width="250"> 
<img src="/demo/4.png" width="250"> <img src="/demo/5.png" width="250"> 
<img src="/demo/6.png" width="250">


# HOWTO
### First install all the dependencies
```
yarn install
````

### Now run the app

```
npx react-native run-ios
```

# Dependencies used
- **react-navigation**: To handle navigate through screens
- **@react-native-firebase**: Firebase client api
others are dependencies that needed to run those dependencies
