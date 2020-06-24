import React from 'react';
import { View, Text, Slider, Image, ImageBackground } from 'react-native';


import bgImage from './../assets/bg-mobile.png';
import logo from './../assets/logo.png';
import documentIcon from './../assets/icon-document.png';
import folderIcon from './../assets/icon-folder.png';
import uploadIcon from './../assets/icon-upload.png';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.imageBackground} alt='background image'>
        <View style={styles.content}>

          <View style={styles.contentArquives}>
            <Image source={logo} />
            <View style={styles.Icons}>
              <View style={styles.contentIcons}>
                <Image source={documentIcon} alt="icon document" />
              </View>
              <View style={styles.contentIcons}>
                <Image source={folderIcon} alt="icon folder" />
              </View>
              <View style={styles.contentIcons}>
                <Image source={uploadIcon} alt="icon icon-upload" />
              </View>
            </View>
          </View>

          <View style={styles.contentDataStorage}>
            <View style={styles.contentDescription}>
              <Text style={styles.description}>You've used</Text>
              <Text style={styles.descriptionWeight}> 815 GB </Text>
              <Text style={styles.description}>of your storage</Text>
            </View>

            <View style={styles.contentSlider}>
              <Slider
                value={815}
                minimumValue={0}
                maximumValue={1000}
                maximumTrackTintColor='hsl(6, 100%, 80%)'
                minimumTrackTintColor='hsl(335, 100%, 65%)'
              />
              <View style={styles.contentDescriptionData}>
                <Text style={styles.descriptionData}>0 GB</Text>
                <Text style={styles.descriptionData}>1000 GB</Text>
              </View>
            </View>

            <View style={styles.contentDescriptionDataUsed}>
              <Text style={styles.descriptionDataUsed}>185</Text>
              <Text style={styles.descriptionDataUsedComplement}>GB LEFT</Text>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};