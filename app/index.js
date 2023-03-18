import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

//ссылки на все элементы приложения
export default function Home() {
    return (
        <View>
            <Text>Первый текст в мобильном приложении</Text>
        </View>
    )
}
/*
export default function Home() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {/!* Use the `Screen` component to configure the layout. *!/}
            <Stack.Screen options={{ title: "Overview" }} />
            {/!* Use the `Link` component to enable optimized client-side routing. *!/}
            <Link href="/details">Go to Details</Link>
        </View>
    );
}*/
