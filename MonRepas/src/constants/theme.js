import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    primary: '#A9D2DF',
    secondary:'#1E3544'
}
export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}
export const FONTS = {
    largeTitle: { fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle },
    h1: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22 },
    body1: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.body2,
        lineHeight: 30,
    },
    body3: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.body3,
        lineHeight: 22,
    },
    body4: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.body4,
        lineHeight: 22,
    },
    body5: {
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.body5,
        lineHeight: 22,
    },
}

export const appTheme = { COLORS, SIZES, FONTS }