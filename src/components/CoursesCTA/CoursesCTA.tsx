import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './CoursesCTA.scss';

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email address' })
    .max(255),
});

type FormData = z.infer<typeof emailSchema>;

const CoursesCTA = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <section className="courses-cta section section-padding ps-0" id="courses">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="courses-cta__content text-center">
          <span className="courses-cta__subtitle">Newsletter</span>

          <h2 className="courses-cta__title">
            Watch our Courses
          </h2>

          <p className="courses-cta__desc">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="courses-cta__form"
          >
            <div className="courses-cta__input-group">
              <input
                type="text"
                placeholder="Your Email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                {...register('email')}
              />

              {errors.email && (
                <div className="error-text">
                  {errors.email.message}
                </div>
              )}

              {isSubmitSuccessful && (
                <div className="success-text">
                  Subscribed successfully!
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-brand">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CoursesCTA;