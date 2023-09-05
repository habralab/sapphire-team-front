import { ArrowRightIcon } from '@chakra-ui/icons';
import { FormControl, Input, IconButton, Heading, FormLabel } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export interface CommentsForm {
  comment: string;
}

type CommentsProps = {
  onSubmit: (values: CommentsForm) => void;
};

export default function Comments({ onSubmit }: CommentsProps) {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<CommentsForm>();

  const onSubmitHandler = (values: CommentsForm) => {
    if (!values.comment) return;
    onSubmit(values);
  };

  return (
    <>
      <Heading as="h2" noOfLines={1}>
        Что думаете?
      </Heading>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <FormControl>
          <FormLabel>
            Comment
            <Input placeholder="comment" {...register('comment', {})} />
          </FormLabel>
        </FormControl>
        <IconButton
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          aria-label="send"
          icon={<ArrowRightIcon />}
        />
      </form>
    </>
  );
}
