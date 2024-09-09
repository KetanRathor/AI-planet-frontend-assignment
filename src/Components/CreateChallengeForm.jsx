// // src/components/ChallengeDetailsForm.js
// import React from 'react';
// import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const CreateChallengeForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       challengeName: '',
//       startDate: null,
//       endDate: null,
//       description: '',
//       level: 'Easy',
//       image: null,
//     },
//     validationSchema: Yup.object({
//       challengeName: Yup.string().required('Challenge name is required'),
//       startDate: Yup.date().nullable().required('Start date is required'),
//       endDate: Yup.date().nullable().required('End date is required'),
//       description: Yup.string().required('Description is required'),
//     }),
//     onSubmit: (values) => {
//       console.log('Form Data:', values);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         width: '50%',
//         margin: 'auto',
//         padding: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px',
//         borderRadius: '8px',
//         backgroundColor: '#f9f9f9',
//       }}
//     >
//       <Typography variant="h4" align="center">
//         Challenge Details
//       </Typography>

//       {/* Challenge Name */}
//       <TextField
//         fullWidth
//         label="Challenge Name"
//         name="challengeName"
//         value={formik.values.challengeName}
//         onChange={formik.handleChange}
//         error={formik.touched.challengeName && Boolean(formik.errors.challengeName)}
//         helperText={formik.touched.challengeName && formik.errors.challengeName}
//       />

//       {/* Start Date */}
//       <DatePicker
//         label="Start Date"
//         value={formik.values.startDate}
//         onChange={(value) => formik.setFieldValue('startDate', value)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             fullWidth
//             error={formik.touched.startDate && Boolean(formik.errors.startDate)}
//             helperText={formik.touched.startDate && formik.errors.startDate}
//           />
//         )}
//       />

//       {/* End Date */}
//       <DatePicker
//         label="End Date"
//         value={formik.values.endDate}
//         onChange={(value) => formik.setFieldValue('endDate', value)}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             fullWidth
//             error={formik.touched.endDate && Boolean(formik.errors.endDate)}
//             helperText={formik.touched.endDate && formik.errors.endDate}
//           />
//         )}
//       />

//       {/* Description */}
//       <TextField
//         fullWidth
//         label="Description"
//         name="description"
//         value={formik.values.description}
//         onChange={formik.handleChange}
//         multiline
//         rows={4}
//         error={formik.touched.description && Boolean(formik.errors.description)}
//         helperText={formik.touched.description && formik.errors.description}
//       />

//       {/* Image Upload */}
//       <Button
//         variant="contained"
//         component="label"
//       >
//         Upload Image
//         <input
//           type="file"
//           hidden
//           onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//         />
//       </Button>

//       {/* Level Type */}
//       <TextField
//         select
//         label="Level Type"
//         name="level"
//         value={formik.values.level}
//         onChange={formik.handleChange}
//         fullWidth
//       >
//         {['Easy', 'Medium', 'Hard'].map((level) => (
//           <MenuItem key={level} value={level}>
//             {level}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         onClick={formik.handleSubmit}
//       >
//         Create Challenge
//       </Button>
//     </Box>
//   );
// };

// export default CreateChallengeForm;

// src/components/ChallengeDetailsForm.js
// import React from 'react';
// import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const CreateChallengeForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       challengeName: '',
//       startDate: '',
//       endDate: '',
//       description: '',
//       level: 'Easy',
//       image: null,
//     },
//     validationSchema: Yup.object({
//       challengeName: Yup.string().required('Challenge name is required'),
//       startDate: Yup.string().required('Start date is required'),
//       endDate: Yup.string().required('End date is required'),
//       description: Yup.string().required('Description is required'),
//     }),
//     onSubmit: (values) => {
//       console.log('Form Data:', values);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         // width: '50%',
//         // margin: 'auto',
//         // padding: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '20px',
//         // borderRadius: '8px',
//         // backgroundColor: '#f9f9f9',
//       }}
//     >
//         <Box
//         sx={{height:"20vh",backgroundColor: '#f9f9f9',
//             display:"flex",
//             justifyContent:"start",
//             alignItems:"center"
//         }}
//         >
//       <Typography variant="h5"
//       sx={{marginLeft:"45px"}}
//       >
//         Challenge Details
//       </Typography>
//       </Box>

//       {/* Challenge Name */}
//       <TextField
//         fullWidth
//         label="Challenge Name"
//         name="challengeName"
//         value={formik.values.challengeName}
//         onChange={formik.handleChange}
//         error={formik.touched.challengeName && Boolean(formik.errors.challengeName)}
//         helperText={formik.touched.challengeName && formik.errors.challengeName}
//       />

//       {/* Start Date with Time */}
//       <TextField
//         fullWidth
//         label="Start Date & Time"
//         name="startDate"
//         type="datetime-local"
//         InputLabelProps={{ shrink: true }}
//         value={formik.values.startDate}
//         onChange={formik.handleChange}
//         error={formik.touched.startDate && Boolean(formik.errors.startDate)}
//         helperText={formik.touched.startDate && formik.errors.startDate}
//       />

//       {/* End Date with Time */}
//       <TextField
//         fullWidth
//         label="End Date & Time"
//         name="endDate"
//         type="datetime-local"
//         InputLabelProps={{ shrink: true }}
//         value={formik.values.endDate}
//         onChange={formik.handleChange}
//         error={formik.touched.endDate && Boolean(formik.errors.endDate)}
//         helperText={formik.touched.endDate && formik.errors.endDate}
//       />

//       {/* Description */}
//       <TextField
//         fullWidth
//         label="Description"
//         name="description"
//         value={formik.values.description}
//         onChange={formik.handleChange}
//         multiline
//         rows={4}
//         error={formik.touched.description && Boolean(formik.errors.description)}
//         helperText={formik.touched.description && formik.errors.description}
//       />

//       {/* Image Upload */}
//       <Button
//         variant="contained"
//         component="label"
//       >
//         Upload Image
//         <input
//           type="file"
//           hidden
//           onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//         />
//       </Button>

//       {/* Level Type */}
//       <TextField
//         select
//         label="Level Type"
//         name="level"
//         value={formik.values.level}
//         onChange={formik.handleChange}
//         fullWidth
//       >
//         {['Easy', 'Medium', 'Hard'].map((level) => (
//           <MenuItem key={level} value={level}>
//             {level}
//           </MenuItem>
//         ))}
//       </TextField>

//       {/* Submit Button */}
//       <Button
//         type="submit"
//         variant="contained"
//         color="primary"
//         onClick={formik.handleSubmit}
//       >
//         Create Challenge
//       </Button>
//     </Box>
//   );
// };

// export default CreateChallengeForm;
///////////////////////////////////////////////////
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, InputAdornment, TextField } from '@mui/material';
// import { Form, Button } from 'rsuite';
// import 'react-datetime/css/react-datetime.css';
// import Datetime from 'react-datetime';
// import calenderLogo from "./images/assets_And_Icons/uil_calender.svg"


// const CreateChallengeForm = () => {
//   const formik = useFormik({
//     initialValues: {
//       challengeName: '',
//       startDate: '',
//       endDate: '',
//       description: '',
//       level: 'Easy',
//       image: null,
//     },
//     validationSchema: Yup.object({
//       challengeName: Yup.string().required('Challenge name is required'),
//       startDate: Yup.string().required('Start date is required'),
//       endDate: Yup.string().required('End date is required'),
//       description: Yup.string().required('Description is required'),
//     }),
//     onSubmit: (values) => {
//       console.log('Form Data:', values);
//     },
//   });

//   return (
//     <div style={{   borderRadius: '8px',  }}>
      
//       {/* Header Section */}
//       <div style={{ height: '20vh', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
//         <h2 style={{ marginLeft: '45px' }}>Challenge Details</h2>
//       </div>
// <Box
// sx={{marginTop:"30px",marginLeft:"40px",width: '39vw'}}
// >
//       {/* Form Section */}
//       <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
//         {/* Challenge Name */}
//         <label htmlFor="challengeName" style={{fontWeight:500,fontSize:"17px"}}>Challenge Name</label>
//         <input
//           type="text"
//           id="challengeName"
//           name="challengeName"
//           value={formik.values.challengeName}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           style={{ height:"35px" }}
//         />
//         {formik.touched.challengeName && formik.errors.challengeName ? (
//           <div style={{ color: 'red' }}>{formik.errors.challengeName}</div>
//         ) : null}

//         {/* Start Date with Time */}
//         <label htmlFor="startDate" style={{fontWeight:500,fontSize:"17px"}}>Start Date </label>
//         <Datetime
//           id="startDate"
//           value={formik.values.startDate}
//           onChange={(value) => formik.setFieldValue('startDate', value)}
//           dateFormat="YYYY-MM-DD"
//           timeFormat="HH:mm"
//           inputProps={{ 
//             placeholder: 'Add start date',
//             style: { 
//               width: '37vw',
//               fontSize:"15px", 
//               height: '20px',
//               padding: '10px'
//             }
//           }}
//         //   style={{ width: '100%' }}
//         />
//         {formik.touched.startDate && formik.errors.startDate ? (
//           <div style={{ color: 'red' }}>{formik.errors.startDate}</div>
//         ) : null}


//         {/* End Date with Time */}
//         <label htmlFor="endDate" style={{fontWeight:500,fontSize:"17px"}}>End Date </label>
//         <Datetime
//           id="endDate"
//           value={formik.values.endDate}
//           onChange={(value) => formik.setFieldValue('endDate', value)}
//           dateFormat="YYYY-MM-DD"
//           timeFormat="HH:mm"
//           inputProps={{ placeholder: 'Add end date',style: { 
//             fontSize:"15px",
//             width: '37vw', 
//             height: '20px',
//             padding: '10px'
//           } }}
//         //   style={{ width: '100%' }}
//         />
//         {formik.touched.endDate && formik.errors.endDate ? (
//           <div style={{ color: 'red' }}>{formik.errors.endDate}</div>
//         ) : null}

//         {/* Description */}
//         <label htmlFor="description" style={{fontWeight:500,fontSize:"17px"}}>Description</label>
//         <textarea
//           id="description"
//           name="description"
//           value={formik.values.description}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           rows="4"
//           style={{ width: '39vw',height:"30vh" }}
//         />
//         {formik.touched.description && formik.errors.description ? (
//           <div style={{ color: 'red' }}>{formik.errors.description}</div>
//         ) : null}

//         {/* Image Upload */}
//         <label htmlFor="image" style={{fontWeight:500,fontSize:"17px"}}>Upload Image</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//           style={{ marginBottom: '20px' }}
//         />

//         {/* Level Type */}
//         <label htmlFor="level" style={{fontWeight:500,fontSize:"17px"}}>Level Type</label>
//         <select
//           id="level"
//           name="level"
//           value={formik.values.level}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           style={{ width: '50%',height:"40px"  }}
//         >
//           {['Easy', 'Medium', 'Hard'].map((level) => (
//             <option key={level} value={level}>
//               {level}
//             </option>
//           ))}
//         </select>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           style={{ padding: '10px 20px', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//         >
//           Create Challenge
//         </button>
//       </form>
//       </Box>
//     </div>
//   );
// };

// export default CreateChallengeForm;


////////////////////////////////////
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { Box, Typography } from '@mui/material';
// import Datetime from 'react-datetime';
// import 'react-datetime/css/react-datetime.css';
// import { addChallenge } from '../Slices/challengeSlice'; // Adjust the import path as needed

// const CreateChallengeForm = () => {
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       challengeName: '',
//       startDate: '',
//       endDate: '',
//       description: '',
//       level: 'Easy',
//       image: null,
//     },
//     validationSchema: Yup.object({
//       challengeName: Yup.string().required('Challenge name is required'),
//       startDate: Yup.string().required('Start date is required'),
//       endDate: Yup.string().required('End date is required'),
//       description: Yup.string().required('Description is required'),
//     }),
//     onSubmit: (values) => {
//       const newChallenge = {
//         id: Date.now(), // Generate a unique ID based on timestamp
//         ...values,
//         image: values.image ? URL.createObjectURL(values.image) : 'https://via.placeholder.com/150', // Use placeholder if no image is uploaded
//       };
//       dispatch(addChallenge(newChallenge)); // Dispatch the action to add the challenge
//       formik.resetForm(); // Reset form after submission
//     },
//   });

//   return (
//     <div style={{ borderRadius: '8px' }}>
      
//       {/* Header Section */}
//       <div style={{ height: '20vh', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
//         <Typography variant="h5" style={{ marginLeft: '45px' }}>
//           Challenge Details
//         </Typography>
//       </div>

//       <Box sx={{ marginTop: '30px', marginLeft: '40px', width: '39vw' }}>
//         {/* Form Section */}
//         <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
//           {/* Challenge Name */}
//           <label htmlFor="challengeName" style={{ fontWeight: 500, fontSize: '17px' }}>Challenge Name</label>
//           <input
//             type="text"
//             id="challengeName"
//             name="challengeName"
//             value={formik.values.challengeName}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ height: '35px' }}
//           />
//           {formik.touched.challengeName && formik.errors.challengeName ? (
//             <div style={{ color: 'red' }}>{formik.errors.challengeName}</div>
//           ) : null}

//           {/* Start Date with Time */}
//           <label htmlFor="startDate" style={{ fontWeight: 500, fontSize: '17px' }}>Start Date </label>
//           <Datetime
//             id="startDate"
//             value={formik.values.startDate}
//             onChange={(value) => formik.setFieldValue('startDate', value.toISOString())}
//             dateFormat="YYYY-MM-DD"
//             timeFormat="HH:mm"
//             inputProps={{ 
//               placeholder: 'Add start date',
//               style: { 
//                 width: '37vw',
//                 fontSize: '15px', 
//                 height: '20px',
//                 padding: '10px'
//               }
//             }}
//           />
//           {formik.touched.startDate && formik.errors.startDate ? (
//             <div style={{ color: 'red' }}>{formik.errors.startDate}</div>
//           ) : null}

//           {/* End Date with Time */}
//           <label htmlFor="endDate" style={{ fontWeight: 500, fontSize: '17px' }}>End Date </label>
//           <Datetime
//             id="endDate"
//             value={formik.values.endDate}
//             onChange={(value) => formik.setFieldValue('endDate', value.toISOString())}
//             dateFormat="YYYY-MM-DD"
//             timeFormat="HH:mm"
//             inputProps={{ 
//               placeholder: 'Add end date',
//               style: { 
//                 fontSize: '15px',
//                 width: '37vw', 
//                 height: '20px',
//                 padding: '10px'
//               } 
//             }}
//           />
//           {formik.touched.endDate && formik.errors.endDate ? (
//             <div style={{ color: 'red' }}>{formik.errors.endDate}</div>
//           ) : null}

//           {/* Description */}
//           <label htmlFor="description" style={{ fontWeight: 500, fontSize: '17px' }}>Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formik.values.description}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             rows="4"
//             style={{ width: '39vw', height: '30vh' }}
//           />
//           {formik.touched.description && formik.errors.description ? (
//             <div style={{ color: 'red' }}>{formik.errors.description}</div>
//           ) : null}

//           {/* Image Upload */}
//           <label htmlFor="image" style={{ fontWeight: 500, fontSize: '17px' }}>Upload Image</label>
//           <input
//             type="file"
//             id="image"
//             name="image"
//             onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
//             style={{ marginBottom: '20px' }}
//           />

//           {/* Level Type */}
//           <label htmlFor="level" style={{ fontWeight: 500, fontSize: '17px' }}>Level Type</label>
//           <select
//             id="level"
//             name="level"
//             value={formik.values.level}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             style={{ width: '50%', height: '40px' }}
//           >
//             {['Easy', 'Medium', 'Hard'].map((level) => (
//               <option key={level} value={level}>
//                 {level}
//               </option>
//             ))}
//           </select>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             style={{ padding: '10px 20px', backgroundColor: '#3f51b5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//           >
//             Create Challenge
//           </button>
//         </form>
//       </Box>
//     </div>
//   );
// };

// export default CreateChallengeForm;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { addChallenge } from '../Slices/challengeSlice'; // Adjust the import path as needed

const CreateChallengeForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      challengeName: '',
      startDate: '',
      endDate: '',
      description: '',
      level: 'Easy',
      image: null,
    },
    validationSchema: Yup.object({
      challengeName: Yup.string().required('Challenge name is required'),
      startDate: Yup.string().required('Start date is required'),
      endDate: Yup.string().required('End date is required'),
      description: Yup.string().required('Description is required'),
    }),
    onSubmit: (values) => {
      const newChallenge = {
        id: Date.now(), // Generate a unique ID based on timestamp
        ...values,
        image: values.image ? URL.createObjectURL(values.image) : 'https://via.placeholder.com/150', // Use placeholder if no image is uploaded
      };
      dispatch(addChallenge(newChallenge)); // Dispatch the action to add the challenge
      formik.resetForm(); // Reset form after submission
    },
  });

  const handleDateChange = (name) => (value) => {
    if (moment.isMoment(value)) {
      formik.setFieldValue(name, value.toISOString());
    }
  };

  return (
    <div style={{ borderRadius: '8px' }}>
      
      {/* Header Section */}
      <div style={{ height: '20vh', backgroundColor: '#f9f9f9', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
        <Typography variant="h5" style={{ marginLeft: '45px' }}>
          Challenge Details
        </Typography>
      </div>

      <Box sx={{ marginTop: '30px', marginLeft: '40px', width: '39vw' }}>
        {/* Form Section */}
        <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Challenge Name */}
          <label htmlFor="challengeName" style={{ fontWeight: 500, fontSize: '17px' }}>Challenge Name</label>
          <input
            type="text"
            id="challengeName"
            name="challengeName"
            value={formik.values.challengeName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ height: '35px' }}
          />
          {formik.touched.challengeName && formik.errors.challengeName ? (
            <div style={{ color: 'red' }}>{formik.errors.challengeName}</div>
          ) : null}

          {/* Start Date with Time */}
          <label htmlFor="startDate" style={{ fontWeight: 500, fontSize: '17px' }}>Start Date </label>
          <Datetime
            id="startDate"
            value={formik.values.startDate ? moment(formik.values.startDate) : ''}
            onChange={handleDateChange('startDate')}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            inputProps={{ 
              placeholder: 'Add start date',
              style: { 
                width: '37vw',
                fontSize: '15px', 
                height: '20px',
                padding: '10px'
              }
            }}
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <div style={{ color: 'red' }}>{formik.errors.startDate}</div>
          ) : null}

          {/* End Date with Time */}
          <label htmlFor="endDate" style={{ fontWeight: 500, fontSize: '17px' }}>End Date </label>
          <Datetime
            id="endDate"
            value={formik.values.endDate ? moment(formik.values.endDate) : ''}
            onChange={handleDateChange('endDate')}
            dateFormat="YYYY-MM-DD"
            timeFormat="HH:mm"
            inputProps={{ 
              placeholder: 'Add end date',
              style: { 
                fontSize: '15px',
                width: '37vw', 
                height: '20px',
                padding: '10px'
              } 
            }}
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <div style={{ color: 'red' }}>{formik.errors.endDate}</div>
          ) : null}

          {/* Description */}
          <label htmlFor="description" style={{ fontWeight: 500, fontSize: '17px' }}>Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            style={{ width: '39vw', height: '30vh' }}
          />
          {formik.touched.description && formik.errors.description ? (
            <div style={{ color: 'red' }}>{formik.errors.description}</div>
          ) : null}

          {/* Image Upload */}
          <label htmlFor="image" style={{ fontWeight: 500, fontSize: '17px' }}>Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
            style={{ marginBottom: '20px' }}
          />

          {/* Level Type */}
          <label htmlFor="level" style={{ fontWeight: 500, fontSize: '17px' }}>Level Type</label>
          <select
            id="level"
            name="level"
            value={formik.values.level}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: '50%', height: '40px' }}
          >
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            style={{ 
                padding: '10px 20px', 
                backgroundColor: '#44914c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer',width:"45%",height:"8vh",borderRadius:"10px" ,fontSize:"medium"}}
          >
            Create Challenge
          </button>
        </form>
      </Box>
    </div>
  );
};

export default CreateChallengeForm;
