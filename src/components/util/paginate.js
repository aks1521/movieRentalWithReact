export default function paginate(items, currentPage, pageSize ) {
    const fromIndex= (currentPage - 1)*pageSize;
    const toIndex= fromIndex+pageSize;
    return items.slice(fromIndex, toIndex);
}