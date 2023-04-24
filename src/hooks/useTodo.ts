import { useGetTodoQuery } from "../generated/graphql"

export const useTodoLoadData = () => {

    const todoProps = useGetTodoQuery();

    return todoProps;

}