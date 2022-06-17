const loremIpsum = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium at urna vel iaculis. Sed facilisis, ligula ut scelerisque rhoncus, metus felis consectetur nisl, non laoreet libero arcu sed quam. Phasellus ac sapien vel tellus fringilla vehicula. Aliquam congue ac augue ut fringilla. Cras posuere in neque non elementum. Nullam at sapien sit amet leo mattis fermentum sit amet in risus. Pellentesque tincidunt nisl dui, sit amet tempus turpis facilisis et. Proin rutrum euismod lorem a consequat. Duis placerat viverra lorem non tristique. Cras sem ipsum, molestie sit amet molestie ac, cursus a nibh. Fusce sollicitudin ac turpis et imperdiet. Duis suscipit sapien id urna finibus, ac vehicula lorem tincidunt. Sed fringilla, nisl vitae hendrerit cursus, orci odio fermentum quam, id sollicitudin arcu urna vitae velit. In ut elementum nisl, non pulvinar lectus. Suspendisse accumsan purus quis pulvinar viverra. Cras placerat condimentum lorem, ut interdum quam finibus rutrum.'

export const modalsData = [
  {
    id: 0,
    header: 'Header 1 - String',
    footer: 'Footer 1 - String',
    body: `This is using the body prop for Modal 1. ${loremIpsum}`
  },
  {
    id: 1,
    header: <h1>Header 2 - JSX</h1>,
    footer: <h3>Footer 2 - JSX</h3>,
    body: <p>{`This is using the body prop for Modal 2. ${loremIpsum}`}</p>
  },
  {
    id: 2,
    header: <h1>Header 3 - JSX</h1>,
    footer: 'Footer 3 - String',
    children: <p>{`This is using the children prop for Modal 3. ${loremIpsum}`}</p>
  },
  {
    id: 3,
    header: 'Header 4 - String',
    footer: <h3>Footer 4 - JSX</h3>,
    children: `This is using the children prop for Modal 4. ${loremIpsum}`
  },
  {
    id: 4,
    header: 'Header 5 - String (No Footer)',
    body: `This is using the body prop for Modal 5. ${loremIpsum}`
  }
]
