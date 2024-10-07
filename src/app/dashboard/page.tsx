import TodoList from "@/components/Utilities/TodoList";

export default function Dashboard() {
    return (
        <main>
            <h1>Dashboard Page</h1>
            <div className="pt-2"><TodoList /></div>
        </main>
    );
}