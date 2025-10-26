import { useState } from "react";
import { RadioGroup, Radio, Label } from "react-aria-components";

function App() {
  const [selectedDrone, setSelectedDrone] = useState("huey");
  return (
    <div
      style={{
        backgroundColor: "rgb(239, 68, 68)",
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        gridTemplateRows: "repeat(1, minmax(0, 1fr))",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(59, 130, 246)",
          overflow: "scroll",
        }}
      >
        Cascading Style Sheets (CSS) is a style sheet language used for
        specifying the presentation and styling of a document written in a
        markup language such as HTML or XML (including XML dialects such as SVG,
        MathML or XHTML).[2] CSS is a cornerstone technology of the World Wide
        Web, alongside HTML and JavaScript.[3] Cascading Style Sheets (CSS) is a
        style sheet language used for specifying the presentation and styling of
        a document written in a markup language such as HTML or XML (including
        XML dialects such as SVG, MathML or XHTML).[2] CSS is a cornerstone
        technology of the World Wide Web, alongside HTML and JavaScript.[3]
        Cascading Style Sheets (CSS) is a style sheet language used for
        specifying the presentation and styling of a document written in a
        markup language such as HTML or XML (including XML dialects such as SVG,
        MathML or XHTML).[2] CSS is a cornerstone technology of the World Wide
        Web, alongside HTML and JavaScript.[3] Cascading Style Sheets (CSS) is a
        style sheet language used for specifying the presentation and styling of
        a document written in a markup language such as HTML or XML (including
        XML dialects such as SVG, MathML or XHTML).[2] CSS is a cornerstone
        technology of the World Wide Web, alongside HTML and JavaScript.[3]
      </div>
      <div
        style={{
          backgroundColor: "rgb(34, 197, 94)",
          overflow: "scroll",
        }}
      >
        Hypertext Markup Language (HTML) is the standard markup language[a] for
        documents designed to be displayed in a web browser. It defines the
        content and structure of web content. It is often assisted by
        technologies such as Cascading Style Sheets (CSS) and scripting
        languages such as JavaScript. Hypertext Markup Language (HTML) is the
        standard markup language[a] for documents designed to be displayed in a
        web browser. It defines the content and structure of web content. It is
        often assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript. Hypertext Markup Language (HTML)
        is the standard markup language[a] for documents designed to be
        displayed in a web browser. It defines the content and structure of web
        content. It is often assisted by technologies such as Cascading Style
        Sheets (CSS) and scripting languages such as JavaScript. Hypertext
        Markup Language (HTML) is the standard markup language[a] for documents
        designed to be displayed in a web browser. It defines the content and
        structure of web content. It is often assisted by technologies such as
        Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
        Hypertext Markup Language (HTML) is the standard markup language[a] for
        documents designed to be displayed in a web browser. It defines the
        content and structure of web content. It is often assisted by
        technologies such as Cascading Style Sheets (CSS) and scripting
        languages such as JavaScript. Hypertext Markup Language (HTML) is the
        standard markup language[a] for documents designed to be displayed in a
        web browser. It defines the content and structure of web content. It is
        often assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript. Hypertext Markup Language (HTML)
        is the standard markup language[a] for documents designed to be
        displayed in a web browser. It defines the content and structure of web
        content. It is often assisted by technologies such as Cascading Style
        Sheets (CSS) and scripting languages such as JavaScript. Hypertext
        Markup Language (HTML) is the standard markup language[a] for documents
        designed to be displayed in a web browser. It defines the content and
        structure of web content. It is often assisted by technologies such as
        Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
        Hypertext Markup Language (HTML) is the standard markup language[a] for
        documents designed to be displayed in a web browser. It defines the
        content and structure of web content. It is often assisted by
        technologies such as Cascading Style Sheets (CSS) and scripting
        languages such as JavaScript. Hypertext Markup Language (HTML) is the
        standard markup language[a] for documents designed to be displayed in a
        web browser. It defines the content and structure of web content. It is
        often assisted by technologies such as Cascading Style Sheets (CSS) and
        scripting languages such as JavaScript. Hypertext Markup Language (HTML)
        is the standard markup language[a] for documents designed to be
        displayed in a web browser. It defines the content and structure of web
        content. It is often assisted by technologies such as Cascading Style
        Sheets (CSS) and scripting languages such as JavaScript. Hypertext
        Markup Language (HTML) is the standard markup language[a] for documents
        designed to be displayed in a web browser. It defines the content and
        structure of web content. It is often assisted by technologies such as
        Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
        Hypertext Markup Language (HTML) is the standard markup language[a] for
        documents designed to be displayed in a web browser. It defines the
        content and structure of web content. It is often assisted by
        technologies such as Cascading Style Sheets (CSS) and scripting
        languages such as JavaScript.
        <fieldset>
          <legend>Select a maintenance drone:</legend>

          <div>
            <input
              type="radio"
              id="huey"
              name="drone"
              value={"huey"}
              defaultChecked
              onChange={(e) => setSelectedDrone(e.target.value)}
            />
            <label htmlFor="huey">Huey</label>
          </div>

          <div>
            <input
              type="radio"
              id="dewey"
              name="drone"
              value={"dewey"}
              onChange={(e) => setSelectedDrone(e.target.value)}
            />
            <label htmlFor="dewey">Dewey</label>
          </div>

          <div>
            <input
              type="radio"
              id="louie"
              name="drone"
              value={"louie"}
              onChange={(e) => setSelectedDrone(e.target.value)}
            />
            <label htmlFor="louie">Louie</label>
          </div>
          <p>Selected drone: {selectedDrone}</p>
        </fieldset>
        <RadioGroup>
          <Label>Favorite pet</Label>
          <Radio value="dogs">Dog</Radio>
          <Radio value="cats">Cat</Radio>
          <Radio value="dragon">Dragon</Radio>
        </RadioGroup>
      </div>
    </div>
  );
}

export default App;
