import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Summary',
          tabBarIcon: ({ color, size }) => (
<MaterialCommunityIcons name="radar" size={24} color="#b6fc32" />
          ),
          tabBarLabelStyle: {
            color: "#b6fc32", // Set this to the same color as your icon
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      
      <Tabs.Screen
        name="two"
        options={{
          title: 'Screen Time',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" size={24} color="#b6fc32" />
          ),
          tabBarLabelStyle: {
            color: "#b6fc32", // Set this to the same color as your icon
          },
        }}
      />

    <Tabs.Screen
      name="three"
      options={{
        title: 'Sharing',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people" size={24} color="#b6fc32" />
        ),
        tabBarLabelStyle: {
          color: "#b6fc32", // Set this to the same color as your icon
        },
      }}
    />
    </Tabs>
  );
}
