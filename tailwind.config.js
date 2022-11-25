module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
   
		extend: {
			fontFamily: {
				sans: ["Souce Sans Pro Regular", "sans-serif"],
			},
			colors: {
				"rutgers-red": "#CC0033",
				"rutgers-grey": "#5F6A72",
      			"rutgers-light-grey": "#F4F4F4",
				"rutgers-gray": "#5F6A72"
			},
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      height: {
        '160': '40rem'
      },
      spacing: {
		'17':'4.25rem',
        '18':'4.5rem',
		'100':'36rem'
      },
	  fontSize: {
		smmd: '0.938rem'
	  }
	  },
	plugins: []
  }
}
