const firebase = require('firebase/app');
require('firebase/auth');

class UserModel {
  async createUserWithEmailAndPassword(email, password) {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async signInWithEmailAndPassword(email, password) {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async sendEmailVerification() {
    try {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        await currentUser.sendEmailVerification();
      }
    } catch (error) {
      throw error;
    }
  }

  async sendPasswordResetEmail(email) {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserModel();
