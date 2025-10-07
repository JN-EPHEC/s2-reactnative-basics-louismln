import ProfileCard from "@/components/ProfileCard";
import { ScrollView, StyleSheet } from "react-native";

const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com' },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com' },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com' },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com' },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com' },
];


export default function HomeScreen() {
  return (
      <ScrollView>
<ProfileCard
  name="Alice"
  jobTitle="React Native Developer"
  imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
  name="Nathan"
  jobTitle="Product owner"
  imageUrl="https://picsum.photos/200/300"
/>

<ProfileCard
  name="Louis"
  jobTitle="Joueur"
  imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
  name="Anthony"
  jobTitle="Baiseur de poid lourd"
  imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
  name="Jihane"
  jobTitle="Leuw saint pierre"
  imageUrl="https://picsum.photos/200/300"
/>
<ProfileCard
  name="URSAF"
  jobTitle="bizarre"
  imageUrl="https://picsum.photos/200/300"
/>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  nom: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
