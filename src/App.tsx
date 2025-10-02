// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
// import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

function App() {

  return (
      <>
          {/*<ViteIntro />*/}
          {/*<ClassComponent />*/}
          {/*<FunctionalComponent />*/}
          {/*<ArrowFunctionalComponent />*/}
          {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props" />*/}
          {/*<ArrowFunctionalComponentWithProps title="2nd title" />*/}
          {/*<ArrowFunctionalComponentWithPropsType */}
          {/*  title="Is a Arrow Functional Component With 2 Props"*/}
          {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."*/}
          {/*/>*/}
          {/*<Card title="Card">*/}
          {/*    <ArrowFunctionalComponentWithPropsType*/}
          {/*        title="Is a Arrow Functional Component with 2 Props"*/}
          {/*            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."*/}
          {/*        />*/}
          {/*</Card>*/}
          <Layout>
              {/*<ArrowFunctionalComponentWithPropsType*/}
              {/*  title="Is a Arrow Functional Component With 2 Props"*/}
              {/*  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"*/}
              {/*/>*/}
              {/*<FunctionalComponentWithState />*/}
              {/*<ClassComponentWithState />*/}
              {/*<Counter />*/}
              <NameChanger/>
          </Layout>
      </>
  )
}

export default App
