import React from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { db } from '../firebase.js';
import ResponsiveAppBar from './Header.js';

export default function VoiceRecorder() {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);

    // Upload audio blob to Firestore
    uploadAudioToFirestore(blob);
  };

  const uploadAudioToFirestore = async (audioBlob) => {
    try {
      const storageRef = db.collection('Voice_Messages').doc(); // You can customize the collection name and document ID
      const uploadTask = storageRef.put(audioBlob);

      // Wait for the upload to complete
      await uploadTask;

      // Get the download URL from Firestore
      const downloadURL = await storageRef.getDownloadURL();
      console.log('Audio uploaded to Firestore:', downloadURL);
    } catch (error) {
      console.error('Error uploading audio to Firestore:', error);
    }
  };

  return (
    <div>
      <ResponsiveAppBar/>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        onNotAllowedOrFound={(err) => console.log(err)}
        downloadOnSavePress={true}
        downloadFileExtension="webm"
        mediaRecorderOptions={{
          audioBitsPerSecond: 128000,
        }}
      />
      <br />
    </div>
  );
}
