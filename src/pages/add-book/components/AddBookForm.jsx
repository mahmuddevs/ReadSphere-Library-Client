const AddBookForm = ({ register, handleSubmit, errors, categories, formRef }) => {
    return (
        <div className="grid place-items-center">
            <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl my-8">
                <form ref={formRef} onSubmit={handleSubmit} className="card-body grid grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name Is Required"
                        })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <p className="text-red-500 text-sm font-semibold">{errors.name.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="url" {...register("image", {
                            required: "Image URL Is Required"
                        })} placeholder="Image Url" className="input input-bordered" />
                        {errors.image && <p className="text-red-500 text-sm font-semibold">{errors.image.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" {...register("author", {
                            required: "Author Is Required"
                        })} placeholder="Author Name" className="input input-bordered" />
                        {errors.author && <p className="text-red-500 text-sm font-semibold">{errors.author.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="number" min={0} {...register("quantity", {
                            required: "Quantity Is Required",
                            valueAsNumber: true,
                            min: {
                                value: 0,
                                message: "Minimum Value Must Be Positive",
                            }
                        })} placeholder="Quantity" className="input input-bordered" />
                        {errors.quantity && <p className="text-red-500 text-sm font-semibold">{errors.quantity.message}</p>}
                    </div>
                    <div className="form-control self-end w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full" {...register("category", {
                            required: "Category Is Required",
                            validate: (value) => value !== "" || "Category Is Required"
                        })}>
                            <option value="">Select Category</option>
                            {
                                categories?.map((category, index) => {
                                    return <option key={index + 1} value={category.categoryName}>{category.categoryName}</option>
                                })
                            }
                        </select>
                        {errors.category && <p className="text-red-500 text-sm font-semibold">{errors.category.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" min={1} max={5} {...register("rating", {
                            required: "Rating Is Required",
                            valueAsNumber: true,
                            min: {
                                value: 1,
                                message: "Minimum Value Is 1",
                            },
                            max: {
                                value: 5,
                                message: "Maximum Value Is 5",
                            },
                        })} placeholder="Rating" className="input input-bordered" />
                        {errors.rating && <p className="text-red-500 text-sm font-semibold">{errors.rating.message}</p>}
                    </div>
                    <div className="form-control col-span-2 md:col-span-1">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-32" {...register("description", {
                            required: "Description Is Required"
                        })} placeholder="Write Short Description About the Book"></textarea>
                        {errors.description && <p className="text-red-500 text-sm font-semibold">{errors.description.message}</p>}
                    </div>

                    <div className="form-control col-span-2 md:col-span-1">
                        <label className="label">
                            <span className="label-text">Book Content</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-32" {...register("bookContent", {
                            required: "Book Content Is Required"
                        })} placeholder="Write Contents of the Book"></textarea>
                        {errors.bookContent && <p className="text-red-500 text-sm font-semibold">{errors.bookContent.message}</p>}
                    </div>

                    <div className="form-control mt-6 col-span-2">
                        <button type="submit" className="btn bg-primary-new hover:bg-secondary-new text-white">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBookForm