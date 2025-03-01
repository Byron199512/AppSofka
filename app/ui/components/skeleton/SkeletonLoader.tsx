import React from 'react';
import { View, StyleSheet } from 'react-native';


const SkeletonLoader = ({ children }: { children: React.ReactNode }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};


SkeletonLoader.Avatar = () => (
    <View style={styles.avatarContainer}>
        <View style={styles.avatar} />
    </View>
);


SkeletonLoader.Line = () => (
    <View style={styles.lineContainer}>
        <View style={styles.line} />
    </View>
);


SkeletonLoader.Rect = () => (
    <View style={styles.rectContainer}>
        <View style={styles.rect} />
    </View>
);


SkeletonLoader.Item = () => (
    <View style={styles.itemContainer}>
        <View style={styles.itemTextContainer}>
            <View style={styles.itemLine} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#e0e0e0',
    },
    avatar: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
    },
    lineContainer: {
        marginTop: 10,
    },
    line: {
        width: 200,
        height: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    rectContainer: {
        marginTop: 10,
    },
    rect: {
        width: 300,
        height: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },
    itemAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#e0e0e0',
    },
    itemTextContainer: {
        marginLeft: 15,
        flex: 1,
    },
    itemLine: {
        width: '100%',
        height: 60,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        marginBottom: 5,
    },
});

export default SkeletonLoader;
