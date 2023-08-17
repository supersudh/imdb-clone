export default function Loading() {
  console.log(2, 'LOADING FLEX');
  return (
    <div className="flex justify-center">
      <img className="h-96" src="/spinner.svg" alt="loading..." />
    </div>
  );
}
