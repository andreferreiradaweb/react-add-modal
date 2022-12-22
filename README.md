# react-add-modal

Este This modal was develop to support the open source community and also to use on my personal projetos.

## Installation

i gonna use npm for this exemple, but you also can use yarn to install.
First of all, let's install the modal as a  Production Dependency. Open the terminal and run the following command:

```bash
npm install react-add-modal --save
```

## Usage

Now you need to import the modal on your react component, and set two obrigatory properties: 
  - visible: boolean
  - dismissible: boolean

And you alse need to set the title and description to your modal using this two properties:
 - title: string
 - description: string

(You can find more information about the all properties bellow)

See the exemple bello:

```javascript
import { useState } from 'react'
import { Modal } from 'react-add-modal'

export const Component = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <div>
      <Modal 
        visible={isModalVisible}
        dismissible={true}
        title="I am a title"
        description="This is the description for the modal"
      />
    </div>
  )
}
```

## Customizations
 ### Use with children

To use the component with children you must just open and close the modal tags, and pass a children on it,you can pass anithhing as a children, a component, text or a simple html tag. After using a children, the default title is not gonna be present on the modal anymore. See the exemple bellow:
```javascript
<Modal visible={isModalVisible} dismissible={true}>
  <p>i am a children</p>
</Modal>
```

### Custom position
there is a property called customPosition that you can use to render your modal on whhere you want:

- "default"
- "topLeft"
- "topRight"
- "bottomLeft"
- "bottomRight"

See the exemple bellow:
```javascript
  dismissible={true}
  customPosition="topLeft"
>
  <p>i am a children</p>
</Modal>
```

That was the basic for customize your modal, now you can see all the properties, and how to use each one:

| Property | Type | How to use |
------ | ------ | ----------
| title | string | title="This is a title"
| description | string | description="I am a description"
| customPosition | variantPositionTypes | customPosition="topLeft" \ "topRight" \ "bottomLeft" \ "bottomRight"
| onClose | function | onClose={() => console.log("Pass your function")}
| onConfirm | function | onConfirm={() => console.log("Pass your function")}
| className | string | className="my-custom-class-name"
| visible | boolean | visible={true}
| dismissible | boolean | dismissible={true}
| stylesOverlay | React.CSSProperties | stylesOverlay={{backgroundColor: 'black'}}
| stylesWrapper | React.CSSProperties | stylesOverlay={{backgroundColor: 'blue'}}
| stylesContainer | React.CSSProperties | stylesOverlay={{width: '400px'}}
| stylesModal | React.CSSProperties | stylesOverlay={{borderRadius: '30px'}}

## Contributing
[André Ferreira](https://linkedin.com/in/andreferreiradaweb)

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT]
