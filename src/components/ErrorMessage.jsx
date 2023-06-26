function ErrorMessage(props) {
  return (
    <div className="_error p-8 text-center text-2xl font-semibold text-red-600">
    {props.message}
    </div>
  );
}

export default ErrorMessage;
