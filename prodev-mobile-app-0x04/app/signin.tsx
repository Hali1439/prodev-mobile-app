import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { styles as s } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [secure, setSecure] = useState(true);

  return (
    <View style={s.container}>
      <View style={s.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity><Text>← Back</Text></TouchableOpacity>
        </Link>
        <Text />
      </View>

      <View style={s.titleTextGroup}>
        <Text style={s.titleText}>Sign In</Text>
        <Text style={s.subText}>Welcome back, shipper of features.</Text>
      </View>

      <View style={s.formGroup}>
        <View>
          <Text style={s.formLabel}>Email</Text>
          <TextInput
            style={s.formControl}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder="you@domain.com"
          />
        </View>

        <View>
          <Text style={s.formLabel}>Password</Text>
          <View style={s.formPasswordControl}>
            <TextInput
              style={s.passwordControl}
              value={pw}
              onChangeText={setPw}
              placeholder="••••••••"
              secureTextEntry={secure}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Text>{secure ? "Show" : "Hide"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.forgotPasswordText}>Forgot password?</Text>
        </View>
      </View>

      <TouchableOpacity style={s.primaryButton} onPress={() => { /* TODO: auth */ }}>
        <Text style={s.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={s.secondaryButtonGroup}>
        <TouchableOpacity style={s.secondaryButton} onPress={() => { /* TODO: Google auth */ }}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={s.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.secondaryButton} onPress={() => { /* TODO: Facebook auth */ }}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={s.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={s.signupgroup}>
        <Text style={s.signupTitleText}>Don’t have an account? </Text>
        <Link href="/join" asChild>
          <TouchableOpacity><Text style={s.signupSubTitleText}>Join now</Text></TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
