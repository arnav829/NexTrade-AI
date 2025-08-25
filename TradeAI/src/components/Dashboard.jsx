export default function Dashboard({ user }) {
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-green-600">Welcome 🎉</h1>
      <p className="mt-4 text-lg">
        Hello, <span className="font-semibold">{user?.displayName}</span>
      </p>
    </div>
  );
}
