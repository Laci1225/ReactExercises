export default function compareTodos(a, b) {
    return new Date(a.date) - new Date(b.date);
}