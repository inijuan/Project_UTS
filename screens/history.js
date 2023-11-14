import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Header } from "../components";
import datas from "../datas";


const Home = () => {
    const navigation = useNavigation();

    const renderitem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate("News Detail", { item: item })}
            >
                <Box
                    p={"4"}
                    borderBottomColor={"coolGray.300"}
                    borderBottomWidth={1}
                    flexDirection="row"
                    flex={1}
                >
                    <Box flex={1.8}>
                        <Heading lineHeight={"md"} fontSize={"lg"}>
                            {item.title} 
                        </Heading>

                        <Text fontSize={"sm"}>{item.date} {item.time}</Text>
                    </Box>
                </Box>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Header title={""} />
            <Box py={"25"} bg="#C4FF94">
            <Image
                            source={require("../assets/PIC.png")}
                            w="350"
                            h="200"
                            alt="PIC Image"
                        />
            </Box>
            <FlatList
                data={datas}
                renderItem={renderitem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </>
    );
};

export default Home;

