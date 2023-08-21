import { Link } from 'react-router-dom';
import SearchForm from '../components/Forms/SearchForm'

const About = () => (
    <main className="tm-main">
      <div className="row tm-row">
        <SearchForm />
      </div>
      <div className="row tm-row tm-mb-45">
        <div className="col-12">
          <hr className="tm-hr-primary tm-mb-55" />
          <img src="/images/about-01.jpg" alt="one" className="img-fluid" />
        </div>
      </div>
      <div className="row tm-row tm-mb-40">
        <div className="col-12">
          <div className="mb-4">
            <h2 className="pt-2 tm-mb-40 tm-color-primary tm-post-title">
              About this xtra blog
            </h2>
            <p>
              You can immediately download
              <Link
                rel="nofollow"
                to="https://templatemo.com/tm-553-xtra-blog"
                target="_blank">
                Xtra Blog Template
              </Link>
              from TemplateMo website for 100% free of charge. Etiam vehicula,
              tortor ac eleifend tincidunt, diam neque pellentesque ipsum, a
              geugiat eros mauris eget lorem. Quisque in bibendum elit, in
              egestas turpis. Vestibulum ornare sollicitudin congue. Aliquam
              lorem mi, maximus at iaculis ut, viverra vel mauris. Duis congue
              luctus metus, sodales tincidunt lectus fringilla ut. Nunc tempus
              at magna sed vestibulum.
            </p>
            <p>
              Proin et arcu ligula. Praesent quis erat eu est solliditudin
              tristique ut in arcu. Donec bibendum ex id ligula semper dictum.
              Proin malesuada luctus auctor. Suspendisse ullamcorper, mi vel
              molestie ornare, arcu magna euismod ipsum, in malesuada nulla
              magna ut enim. Morbi lacinia magna sed sapien auctor, vitae luctus
              nunc cursus.
            </p>
          </div>
        </div>
      </div>
      <div className="row tm-row tm-mb-120">
        <div className="col-lg-4 tm-about-col">
          <div className="tm-bg-gray tm-about-pad">
            <div className="text-center tm-mt-40 tm-mb-60">
              <i className="fas fa-bezier-curve fa-4x tm-color-primary" />
            </div>
            <h2 className="mb-3 tm-color-primary tm-post-title">Background</h2>
            <p className="mb-0 tm-line-height-short">
              Phasellus pulvinar nisl ornare leo porttitor, et vestibulum lorem
              semper. Duis risus ex, molestie sit amet magna in, pharetra
              pellentesque est. Curabitur elit metus.
            </p>
          </div>
        </div>
        <div className="col-lg-4 tm-about-col">
          <div className="tm-bg-gray tm-about-pad">
            <div className="text-center tm-mt-40 tm-mb-60">
              <i className="fas fa-users-cog fa-4x tm-color-primary" />
            </div>
            <h2 className="mb-3 tm-color-primary tm-post-title">Teamwork</h2>
            <p className="mb-0 tm-line-height-short">
              Suspendisse ullamcorper, mi vel molestie ornare, arcu magna
              euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia
              magna sed auctor, vitae nunc cursus.
            </p>
          </div>
        </div>
        <div className="col-lg-4 tm-about-col">
          <div className="tm-bg-gray tm-about-pad">
            <div className="text-center tm-mt-40 tm-mb-60">
              <i className="fab fa-creative-commons-sampling fa-4x tm-color-primary" />
            </div>
            <h2 className="mb-3 tm-color-primary tm-post-title">
              Our Core Value
            </h2>
            <p className="mb-0 tm-line-height-short">
              Nunc mi ante, suscipit vel dapibus et, volutpat sit amet ante. In
              tempor nec sem vitae varius. Aliquam tincidunt orci sem, et
              imperdiet massa consectetur nec.
            </p>
          </div>
        </div>
      </div>
      <div className="row tm-row tm-mb-60">
        <div className="col-12">
          <hr className="tm-hr-primary  tm-mb-55" />
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-02.jpg"
              alt="two"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">
                John Henry
              </h2>
              <h3 className="tm-h3 mb-3">CEO/Founder</h3>
              <p className="mb-0 tm-line-height-short">
                Aliquam non vulputate lectus, vel ultricies diam. Suspendisse at
                ipsum hendrerit, vestibulum mi id, mattis tortor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-03.jpg"
              alt="three"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">Timy Cake</h2>
              <h3 className="tm-h3 mb-3">Project Director</h3>
              <p className="mb-0 tm-line-height-short">
                Quisque in bibendum elit, in egestas turpis. Vestibulum ornare
                sollicitudin congue. Aliquam lorem mi, maximus at iaculis ut.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-04.jpg"
              alt="four"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">Jay Zoona</h2>
              <h3 className="tm-h3 mb-3">Supervisor</h3>
              <p className="mb-0 tm-line-height-short">
                Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac
                turpis eleifend, commodo purus eget, commodo mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-05.jpg"
              alt="five"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">
                Catherine Soft
              </h2>
              <h3 className="tm-h3 mb-3">Team Leader</h3>
              <p className="mb-0 tm-line-height-short">
                Integer eu sapien hendrerit, imperdiet arcu sit amet,
                sollicitudin ipsum. Phasellus consequat suscipit ligula eget
                bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="row tm-row">
        <div className="col-md-6 col-12 tm-color-gray">
          Design:{' '}
          <a
            rel="nofollow"
            target="_parent"
            href="https://templatemo.com"
            className="tm-external-link">
            TemplateMo
          </a>
        </div>
        <div className="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2020 Xtra Blog Company Co. Ltd.
        </div>
      </footer>
    </main>
  )

export default About