import '!prismjs/themes/prism.css'

import {
  Button,
  Container,
  render,
  VerticalSpace,
  Textbox
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import styles from './styles.css'
import { InsertCodeHandler } from './types'

function Plugin() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [value, setValue] = useState(`forWhatEverYouWant`)
  const handleInsertCodeButtonClick = useCallback(
    function () {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
  )
  return (
    <Container space="medium">
      <VerticalSpace space="small" />
      <div class={styles.container}>
        <Textbox
          name="text"
          onValueInput={setValue}
          value={value}
          variant="border"
        />
      </div>
      <VerticalSpace space="large" />
      <Button fullWidth onClick={handleInsertCodeButtonClick}>
        Insert Code
      </Button>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
