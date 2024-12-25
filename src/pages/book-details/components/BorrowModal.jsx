import useAuth from "../../../hook/useAuth"

const BorrowModal = ({ modalRef, register, handleSubmit, errors, formRef }) => {
    const { user } = useAuth()
    const userName = user.displayName
    const userEmail = user.email
    return (
        <>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} ref={formRef} className="card-body grid grid-cols-2">
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" defaultValue={userName} {...register("userName", {
                                required: "User Name Is Required"
                            })} placeholder="User Name" className="input input-bordered" />
                            {errors.userName && <p className="text-red-500 text-sm font-semibold">{errors.userName.message}</p>}
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email" defaultValue={userEmail} {...register("userEmail", {
                                required: "Email Is Required"
                            })} placeholder="userEmail" className="input input-bordered" />
                            {errors.userEmail && <p className="text-red-500 text-sm font-semibold">{errors.userEmail.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Return Date</span>
                            </label>
                            <input type="date" {...register("returnDate", {
                                required: "Return Date Is Required"
                            })} placeholder="Return Date" className="input input-bordered" />
                            {errors.returnDate && <p className="text-red-500 text-sm font-semibold">{errors.returnDate.message}</p>}
                        </div>
                        <div className="form-control mt-6 col-span-2 space-y-4">
                            <button type="submit" className="btn btn-primary">Add Book</button>
                            <button type="btn" onClick={() => { modalRef.current.close() }} className="btn btn-neutral">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    )
}

export default BorrowModal