export function App() {
  return (
    <div
      css={(theme) => ({
        color: theme.textColor,
      })}
    >
      This is a bug
    </div>
  );
}

export default App;
