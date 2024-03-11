import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface CreateFormData {
  title: string;
  description: string;
}

const CreateForm = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Enter Title"),
    description: yup.string().min(10).required("You must add text"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const onCreatePost = (data: CreateFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)}>
      <h3>Enter your title</h3>
      <input type="text" placeholder="Title..." {...register("title")} />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <h3>Enter your post</h3>
      <textarea placeholder="Description" {...register("description")} />
      <p style={{ color: "red" }}>{errors.description?.message}</p>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateForm;
