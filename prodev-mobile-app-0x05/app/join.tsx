import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { styles as s } from "@/styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function JoinScreen() {
  const [name, setName] = useState("");
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
        <Text style={s.titleText}>Join Now</Text>
        <Text style={s.subText}>Forge your credentials in code and coffee.</Text>
      </View>

      <View style={s.formGroup}>
        <View>
          <Text style={s.formLabel}>Full Name</Text>
          <TextInput
            style={s.formControl}
            value={name}
            onChangeText={setName}
            placeholder="Ada Lovelace"
          />
        </View>

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
              placeholder="Create a strong password"
              secureTextEntry={secure}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Text>{secure ? "Show" : "Hide"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={s.primaryButton} onPress={() => { /* TODO: sign-up */ }}>
        <Text style={s.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={s.secondaryButtonGroup}>
        <TouchableOpacity style={s.secondaryButton} onPress={() => { /* TODO: Google */ }}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={s.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.secondaryButton} onPress={() => { /* TODO: Facebook */ }}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={s.secondaryButtonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={s.signupgroup}>
        <Text style={s.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity><Text style={s.signupSubTitleText}>Sign in</Text></TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
