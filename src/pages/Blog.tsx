import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';

export default function Blog({navigation, route}) {
  const blog = route.params;
  console.log('blog', blog.blog.imageUrl);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />

        <Image
          source={require('../../assets/image/healthyFeet.jpg')}
          style={{width: 'auto', height: 300}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.blogTitle}>
            STEP BY STEP FAMILY FOOT CARE Our Blog: For Your Foot Health
          </Text>
          <Text
            style={{fontStyle: 'italic', color: 'black', marginVertical: 10}}>
            {' '}
            POSTED ON MARCH 25, 2024
          </Text>
          <Text style={styles.blogDescription}>
            It’s always important to maintain the health of your feet and
            ankles, but people who struggle with diabetes must pay even more
            attention than the average individual. Due to potential
            complications arising from high blood sugar, diabetes can inflict
            significant damage in a short amount of time. Left unchecked,
            complications might lead to serious consequences like amputations.
            That’s why this blog post will offer some clear, simple advice on
            diabetic vigilance and management techniques courtesy of the expert
            team at Step by Step Family Foot Care. Understanding the Risks of
            Diabetes High blood sugar levels associated with diabetes can damage
            nerves and blood vessels, especially in the feet. This nerve damage
            can cause numbness, tingling, pain, or even a complete loss of
            feeling. Without the ability to feel your feet, it becomes difficult
            to detect potential problems like wounds or infections, which, when
            combined with poor blood circulation, can lead to gangrene, a
            serious condition that may necessitate amputation or surgery. Early
            Detection is Key Even minor cuts, blisters, or dry skin can evolve
            into serious foot problems for diabetics. Here’s a checklist of what
            to look out for: Blisters Cuts or scrapes Ulcers (open sores) Dry,
            cracked skin Calluses Coldness in the feet Taking Steps Towards
            Healthy Feet The good news is that there are proactive measures you
            can take to safeguard your foot health: Manage your blood sugar
            levels: Maintaining good blood sugar control helps minimize nerve
            and blood vessel damage. Daily foot inspections: Make it a habit to
            check your feet every day for any cuts, blisters, or changes in skin
            texture. Podiatrist care: Schedule regular appointments with a
            podiatrist for professional foot care and maintenance. Proper
            footwear: Wear well-fitting shoes with good support and clean socks
            that absorb moisture. Never go barefoot: This increases your risk of
            cuts, scrapes, and punctures. Consider orthotics: Custom orthotics
            can improve alignment and provide additional comfort and support for
            your feet. At Step By Step Family Foot Care, we are dedicated to
            providing comprehensive podiatric services. If you have any concerns
            about your foot health, please contact our office at (973) 917-3785
            or visit our website to schedule an appointment with Dr. Debra
            Manheim. Our friendly staff in Parsippany is here to help you keep
            your feet healthy and happy! POSTED ONFEBRUARY 26, 2024 It’s Time to
            See Your Podiatrist! Let’s face it: Visiting the doctor isn’t always
            a top priority. Between hectic schedules and readily available
            over-the-counter remedies, DIY treatments can seem tempting.
            However, when it comes to your feet, neglecting potential issues can
            lead to bigger problems, additional complications, and unnecessary
            aches. Step By Step Family Foot Care will always try to keep
            patients posted on what they can do to catch problems early or
            prevent them altogether. That’s why this blog will cover some key
            situations that merit calling your podiatrist right away! Read on to
            learn what to watch for. Navigating Diabetes: If you have diabetes,
            foot care becomes critical. Nerve damage can numb your feet, masking
            injuries and infections. Regular podiatry visits, ideally every 6-8
            weeks, are crucial for early detection and prevention of serious
            complications.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blogImage: {},
  textContainer: {
    padding: 15,
  },
  blogTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  blogDescription: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
});
