import { useLoaderData, useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

const Update = () => {
    const navigate = useNavigate();
    const review = useLoaderData();
    const { _id, service, photoName, phone, price, email, customer, message } = review;
    console.log(review);

    

  

    const handleUpdateReview = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = review.email;
        const message = form.message.value;
       
        

        const updateReview = {
            name,
            message,
            email,
            
    
        };
        fetch(`https://assignment-11-server-projects.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
            "content-type": "application/json",
        },
            body: JSON.stringify(updateReview),
		})
			.then(res => res.json())
    .then(data => {
        if (data.acknowledged) {
            
            toast("Review Update Successfully");
           
        }
    });
	};

return (
    <div>
        <div className=" w-3/4 mx-auto my-16  shadow-2xl ">
            <form onSubmit={handleUpdateReview}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name="name"
                        required
                        defaultValue={photoName}
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        required
                        defaultValue={email}
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        readOnly
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review message</span>
                    </label>
                    <textarea
                        name="message"
                        required
                        defaultValue={message}
                        type="text"
                        placeholder="review message"
                        className="input input-bordered"
                    />
                </div>
                

               
                <div className="form-control mt-6">
                    <button  className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    </div>
 );
};

export default Update;








