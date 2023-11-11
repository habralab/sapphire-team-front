// import { SmallCloseIcon } from '@chakra-ui/icons';
// import {
//   Flex,
//   FormLabel,
//   Input,
//   Text,
//   Tag,
//   TagLabel,
//   IconButton,
//   Icon,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { BsPlus } from 'react-icons/bs';

// export function UpdateAvatar() {
//   const [avatar, setAvatar] = useState<{ avatar: string }>('');

//   const {
//     control,
//     resetField,
//     register,
//     watch,
//     handleSubmit,
//     setValue,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const watchShowAvatar = watch('avatar');

//   return (
//     <form>
//       <Flex direction="column" gap={4}>
//         <FormLabel mb={0}>Фото</FormLabel>
//         <Flex
//           fontWeight="normal"
//           fontSize="sm"
//           py={2}
//           px={5}
//           bg="white"
//           borderRadius="full"
//           alignItems="center"
//           justifyContent="space-between"
//           position="relative"
//         >
//           <Input
//             w="fit-content"
//             type="file"
//             accept="image/*"
//             position="absolute"
//             opacity={0}
//             {...register('avatar')}
//           />
//           <Text>Добавить фотографию</Text>
//           <Icon as={BsPlus} fontSize="2xl" />
//         </Flex>
//         {watchShowAvatar && (
//           <Tag
//             w="fit-content"
//             size="sm"
//             bg="gray.300"
//             py={1}
//             px={2}
//             borderRadius="lg"
//             fontWeight="medium"
//           >
//             <TagLabel>Фотография</TagLabel>
//             <IconButton
//               onClick={() => {
//                 resetField('avatar');
//               }}
//               aria-label="Close"
//               variant="ghost"
//               flexShrink="0"
//               minW="none"
//               height="none"
//               fontWeight="normal"
//               icon={<SmallCloseIcon boxSize={4} />}
//             />
//           </Tag>
//         )}
//       </Flex>
//     </form>
//   );
// }
