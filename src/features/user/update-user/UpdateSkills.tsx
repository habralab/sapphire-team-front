// import { FormControl, FormLabel } from '@chakra-ui/form-control';

// import { SearchSelect } from '~/shared/ui/SearchSelect';

// export function UpdateSkills() {
//   const { data: skills } = useQuery({
//     queryKey: ['getUserSkills', user.id],
//     queryFn: () => userApi.getUserSkills({ user_id: user.id }),
//   });

//   const { mutate: mutateSkills } = useMutation({
//     mutationFn: ({ id, skills }: { id: string; skills: string[] }) =>
//       userApi.updateUserSkills({ id, skills }),
//     onSuccess: () => {
//       navigate(PATHS.profile);
//     },
//     onError: (e: Error) => {
//       toast({
//         title: 'Ошибка обновления профиля',
//         description: e.message,
//         status: 'error',
//         duration: 9000,
//         isClosable: true,
//       });
//     },
//   });

//   const onSubmit = (data: UserType) => {
//     const updatedUser = {
//       id: user.id,
//       first_name: data.first_name,
//       last_name: data.last_name,
//       about: data.about,
//       main_specialization_id: userSpecs[0],
//       secondary_specialization_id: userSpecs[1] ?? null,
//     };

//     const newSkills = {
//       id: user.id,
//       skills: data.skills,
//     };

//     console.log(newSkills);

//     // mutateSkills(newSkills);

//     // mutateUser(updatedUser);
//   };

//   return (
//     <FormControl isRequired>
//       <FormLabel mb={4}>Профессиональные навыки</FormLabel>
//       <SearchSelect
//         selectedItems={userSkills}
//         setSelectedItems={setUserSkills}
//         userSkills={skills}
//       />
//     </FormControl>
//   );
// }
