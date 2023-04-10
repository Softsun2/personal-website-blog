export default function Filter(props) {
  const { children, filter, filterId } = props;
  return (
    <div filter={"url(#filter)"}>
      {children}
      {filter}
    </div>
  );
}
