import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}

function Panel({ children }: CardProps) {
  return <div>{children}</div>;
}
function App() {
  return (
    <div>
      <p>Hello</p>

      <Card>
        <h2>Samsung M52</h2>
        <p>₹25,000</p>
      </Card>

      <Panel>
        <h2>Samsung M52</h2>
        <p>₹25,000</p>
        <p>Electronics</p>
      </Panel>

      <Panel>
        <h2>User Profile</h2>
        <p>Sabir</p>
      </Panel>
    </div>
  );
}

export default App;
