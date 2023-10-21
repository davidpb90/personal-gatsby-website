import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const CVPage = () => {
    return (
        <Layout pageTitle="CV">
            <h1>CV</h1>
            <h3>Education</h3>

            <ol class="text-start">
                <li><p><strong>B.Sc. in Physics</strong> with minor in Mathematics, <strong><a href="https://www.uniandes.edu.co">Universidad de los Andes</a></strong>, Bogotá, Colombia,</p></li>

                <li><p><strong>M.Sc. in Mathematics</strong> with emphasis in Probability and Statistics, Universidad de los Andes, Bogotá, Colombia.</p></li>

                <li><p><strong>M.Sc. in Complex Systems Science</strong>, <strong><a href="https://www.warwick.ac.uk/">University of Warwick</a></strong>, Coventry, UK. <strong><a href="https://www.polytechnique.edu/">École Polytechnique</a></strong>, Paris, France.</p></li>
            </ol>

            <hr />

            <h3 class="text-start">Professional Experience</h3>

            <ol class="text-start">
                <li>
                    <p>Internship at <strong><a href="https://www.microsoft.com/en-us/research/collaboration/inria-joint-centre/">Microsoft-Inria Joint Center</a></strong>. Developing efficient algorithms to detect relevant answers and similar questions in Q&A websites. Paris, 2016.</p>
                </li>
                <li class="text-start">
                    <p>Data Scientist at <strong><a href="https://homebell.de/presse">Homebell</a></strong>. Berlin, 2016-2019.
                        <ul>
                            <li>ML algorithms for pricing.</li>
                            <li>Support implementation and first user of Data Warehouse.</li>
                            <li>Business Intelligence.</li>
                        </ul>
                    </p>
                </li>
                <li class="text-start">
                    <p>Data Scientist at <strong><a href="https://www.medwing.com">Medwing</a></strong>. Berlin, 2019-present.
                        <ul>
                            <li>Data Warehouse developer.</li>
                            <li>Data and Analytics Engineer.</li>
                            <li>Team lead Data.</li>
                        </ul>
                    </p>
                </li>
            </ol>
            
            <hr />

            <h3 class="text-start">Voluntary Work</h3>
            <ol class="text-start">
                <li>
                    <p>Co-organiser of <strong><a href="https://berlin2019.satrdays.org/">satRday Berlin 2019</a></strong>. Treasurer of <strong>satRday Berlin e.V.</strong>. 2019-present, Berlin.</p>
                </li>
                <li>
                    <p><strong><a href="https://www.1fortheworld.org/">One For The World</a></strong>'s data warehouse refactoring Warehouse refactoring. 2021-present, New York (remote).</p>
                </li>
            </ol>
            <hr />
            <h3>Skills</h3>
            <table class="text-start">
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>Data warehousing</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Data Analysis</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Analytics Engineering</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Data Engineering</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>Statistical Modelling</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Machine Learning</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Team Management</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Web development</td>
                                <td>⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>SQL</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>Python</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>R</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>JavaScript</td>
                                <td>⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <hr />
            <h3>Languages</h3>
            <table class="text-start">
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>Spanish</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>French</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr>
                                <td>German</td>
                                <td>⭐⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>Portuguese</td>
                                <td>Reading and Listening</td>
                            </tr>
                            <tr>
                                <td>Italian</td>
                                <td>Reading and Listening</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
      </Layout>
  )
}

export const Head = () => <Seo title="CV" />

export default CVPage