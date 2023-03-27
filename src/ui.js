import '!prismjs/themes/prism.css';
import { Button, Container, render, VerticalSpace } from '@create-figma-plugin/ui';
import { emit } from '@create-figma-plugin/utilities';
import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { highlight, languages } from 'prismjs';
import Editor from 'react-simple-code-editor';
import styles from './styles.css';
function Plugin() {
    var _a = useState("function add(a, b) {\n  return a + b;\n}"), code = _a[0], setCode = _a[1];
    var handleInsertCodeButtonClick = useCallback(function () {
        emit('INSERT_CODE', code);
    }, [code]);
    return (h(Container, { space: "medium" },
        h(VerticalSpace, { space: "small" }),
        h("div", { class: styles.container },
            h(Editor, { highlight: function (code) {
                    return highlight(code, languages.js, 'js');
                }, onValueChange: setCode, preClassName: styles.editor, textareaClassName: styles.editor, value: code })),
        h(VerticalSpace, { space: "large" }),
        h(Button, { fullWidth: true, onClick: handleInsertCodeButtonClick }, "Insert Code"),
        h(VerticalSpace, { space: "small" })));
}
export default render(Plugin);
