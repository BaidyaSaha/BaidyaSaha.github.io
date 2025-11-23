// import React from "react";
// import { useLocation } from "react-router-dom";

// function Publications() {
//   const location = useLocation();
//   const routeName = location.pathname;

//   return (
//     <div class="blog_container">
//       <div class="row">
//         <div class="col-md-4 sidenav_bar  ">
//           <div id="scrollspy1" class="  section_list">
//             <br />
//             <br />

//             <ul class="nav flex-column nav-pills menu-sidebar section_menu">
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-1"
//                 >
//                   Books
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-2"
//                 >
//                   Machine Learning
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-3"
//                 >
//                   Computer Vision
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-4"
//                 >
//                   Robots
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-5"
//                 >
//                   Welding Process
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-6"
//                 >
//                   Predictive Maintenance
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-7"
//                 >
//                   Cognitive Science
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-8"
//                 >
//                   Natural Language Processing
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-9"
//                 >
//                   Others
//                 </a>
//               </li>

//               <li class="nav-item">
//                 <a
//                   class="nav-link text-dark p-3 space_btw link-dark"
//                   href="#example-10"
//                 >
//                   Long Term Goals
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div class="col-md-8 blog_content">
//           <br />
//           <br />
//           <br />
//           <h1> RESEARCH HIGHLIGHTS</h1>
//           <br />
//           <br />

//           <p class="pub_content text-secondary text-left fs-5 lh-base">
//             My research interests lie on the intersection of advancement and
//             application of the machine learning and computer vision-based
//             algorithms. My research interest revolves around a broad range of
//             areas such as, Artificial Intelligence, Machine Learning, Computer
//             Vision, Robotics, Computational Cognitive Science, Reliability,
//             Signal Processing, and Software Engineering. To date, I published
//             fifty six (56) research papers in the peer-reviewed journals and
//             conferences. My research articles are published in the reputed
//             journals like Pattern Recognition (Impact Factor (I. F.) 7.740),
//             Emerging Applications of Artificial Intelligence (Impact Factor (I.
//             F.) 4.201), IEEE Signal Processing Letters (I. F. 3.109), American
//             Journal of Neuroradiology (I. F. 3.653), and premier conferences
//             like MICCAI (Acceptance Rate (A. R.) ~32%, rank 1 conference in
//             computer science) , ECML (A. R. ~30%) , ACCV (A. R. ~29%), and ICIP
//             (A. R. ~45%). I received 558 google scholar citations and 11572
//             research gate reads to date; My publications are categorized into
//             the following major areas.
//           </p>
//           <hr className="divider" />
//           <div
//             data-mdb-spy="scroll"
//             data-mdb-target="#scrollspy1"
//             data-mdb-offset="0"
//             class="scrollspy-example"
//           >
//             <section id="example-1" class="blog_ct intro_title">
//               <h1>BOOKS & BOOK CHAPTERS</h1>
//               <br />
//               <p class="book_content fs-5 text-secondary">
//                 1.
//                 <em class="text-info "> B. N. Saha</em>, The evolution of snake
//                 toward automation for multiple blob-object segmentation. LAP
//                 Lambert Academic Publishing, 2012
//               </p>
//               <br />

//               <p class="book_content fs-5 text-secondary">
//                 2. A. González-Cantú, M. E. Romero-Ibarguengoitia, and{" "}
//                 <em class="text-info">B. N. Saha</em>, Classification of Left
//                 Ventricular Hypertrophy and NAFLD Through Decision Tree
//                 Algorithm. Chapman and Hall/CRC Press, Taylor & Francis Group,
//                 Editors Ayman El-Baz, Jasjit S. Suri, 2021.
//               </p>
//             </section>
//             <hr className="divider" />
//             <section id="example-2" class="blog_ct">
//               <h1>ADVANCEMENTS OF MACHINE LEARNING ALGORITHM</h1>
//               <br />
//               <p class="pub_content text-justify fs-5 lh-base">
//                 One of my key research interests is integrating novel
//                 data-driven regularization strategies into classification
//                 algorithms such as AdaBoost, Support Vector Machines (SVM), and
//                 Decision Trees. These strategies aim to reduce test error by
//                 mitigating overfitting and promoting early convergence. In this
//                 context, I have developed two innovative algorithms: Adaptive
//                 Regularized Boosting (AR-Boost) and kNN regularized Support
//                 Vector Machine (kNN-SVM). Relevant publications are listed
//                 below.
//               </p>
//               <br />

//               <p class="book_content fs-5 text-secondary">
//                 3.
//                 <em class="text-info"> B. N. Saha</em>, Pavan Sarvaiya , Wali
//                 Mohammad Abdullah, Md. Morshedul Islam. (2025). CRAMP:
//                 Categorizing Classifiers and Regressors for Scalable Parallelism
//                 on Distributed and Multicore Systems. Proceedings of IEEE High
//                 Performance Extreme Computing Virtual Conference. IEEE High
//                 Performance Extreme Computing Virtual Conference, (1-6).
//               </p>
//               <br />

//               <p class="book_content fs-5 text-secondary">
//                 4.
//                 <em class="text-info"> B. N. Saha</em>, G. Kunapuli, N. Ray, J.
//                 A. Maldjian, and S. Natarajan, “Ar-boost: Reducing overfitting
//                 by a robust data-driven regularization strategy,” in Joint
//                 European Conference on Machine Learning and Knowledge Discovery
//                 in Databases (ECMLPKDD). Springer, 2013, pp. 1–16, acceptance
//                 rate ~25%.
//               </p>
//               <br />

//               <section id="example-3" class="blog_ct intro_title">
//                 <h1>COMPUTER VISION & IMAGE PROCESSING</h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   My research focuses on advancing algorithms for segmentation,
//                   filtering, tracking, registration, object localization,
//                   detection, and validation—leveraging techniques such as
//                   Principal Compo- nent Analysis (PCA) and Adaptive Regularized
//                   Boosting (AR-Boost). I have developed several novel methods,
//                   including Probabilistic Quad Tree (PQT) and Fast Bounding Box
//                   (FBB) for approximate segmentation, automatic snake-based
//                   segmentation algorithms, Hierarchical Level Set (HLS),
//                   Topological Graph Cut (TGC), Robust Convergence Index (RCI),
//                   and the Inclusion Filter. Additionally, I have applied
//                   Statistical Relational Learning (SRL) for Alzheimer’s dis-
//                   ease prediction and designed a Minimum Spanning Tree
//                   (MST)-based sequence optimization algorithm for registering
//                   long, time-sequenced microscopic images. Relevant publications
//                   are listed below.
//                 </p>

//                 <p class="book_content fs-5 text-secondary">
//                   5. A. Bahuguna, D. Yadav, A. Senapati, and
//                   <em class="text-info "> B. N. Saha</em>, “knn-svm with deep
//                   features for covid-19 pneumonia detection from chest x-ray,”
//                   in Mathematics and Computing, B. Rushi Kumar, S. Ponnusamy, D.
//                   Giri, B. Thuraisingham, C. W. Clifton, and B. Carminati, Eds.
//                   Singapore: Springer Nature Singapore, 2022, pp. 103–115.{" "}
//                 </p>

//                 <p class="book_content fs-5 text-secondary">
//                   6. T. A. Asif and<em class="text-info "> B. N. Saha</em>,
//                   “Instagram image filtration with computer vision,” in
//                   Intelligent Computing and Technologies Conference (ICTCON),
//                   2021, pp. 170–173.{" "}
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   7.
//                   <em class="text-info "> B. N. Saha</em>, N. Ray, S. McArdle,
//                   and K. Ley, “Selecting the optimal sequence for deformable
//                   registration of microscopy image sequences using a two-stage
//                   mst-based clustering algorithm,” in Medical Image Computing
//                   and Computer Assisted Intervention - MICCAI 2017: 20th
//                   International Conference, Quebec City, QC, Canada, September
//                   11- 13, 2017, Proceedings. Springer International Publishing,
//                   2017, pp. 353–361, acceptance rate ~32% (rank 1 conference in
//                   computer science).
//                 </p>
//                 <br />
//                 <p class="book_content fs-5 text-secondary">
//                   8. “A two-stage minimum spanning tree (mst) based clustering
//                   algorithm for 2d deformable registration of time sequenced
//                   images,” in Proceedings of IEEE International Conference on
//                   Image Processing (ICIP), 2017, pp. 1472–1476.
//                 </p>
//                 <br />
//                 <p class="book_content fs-5 text-secondary">
//                   9. S. Natarajan, <em class="text-info "> B. N. Saha</em>, S.
//                   Joshi, A. Edwards, T. Khot, E. M. Davenport, K. Kersting, C.
//                   T. Whitlow, and J. A. Maldjian, “Relational learning helps in
//                   three-way classification of alzheimer patients from structural
//                   magnetic resonance images of the brain,” International Journal
//                   of Machine Learning and Cybernetics, vol. 5, no. 5, pp.
//                   659–669, 2014, impact factor 3.753 (15 google scholar
//                   citations).
//                 </p>
//                 <br />
//                 <p class="book_content fs-5 text-secondary">
//                   10. J. A. Maldjian, C. T. Whitlow,{" "}
//                   <em class="text-info "> B. N. Saha</em>, G. Kota, C.
//                   Vandergriff, E. M. Davenport, J. Divers, B. I. Freedman, and
//                   D. W. Bowden, “Automated white matter total lesion volume
//                   segmentation in diabetes,” American Journal of Neuroradiology,
//                   vol. 34, no. 12, pp. 2265–2270, 2013, impact factor 3.653 (38
//                   google scholar citations).
//                 </p>
//                 <br />
//                 <p class="book_content fs-5 text-secondary">
//                   11. <em class="text-info "> B. N. Saha</em>, N. Ray, R.
//                   Greiner, A. Murtha, and H. Zhang, “Quick detection of brain
//                   tumors and edemas: A bounding box method using symmetry,”
//                   Computerized Medical Imaging and Graphics, vol. 36, no. 2, pp.
//                   95–107, 2012, impact factor 6.418 (127 google scholar
//                   citations).
//                 </p>
//                 <br />
//                 <p class="book_content fs-5 text-secondary">
//                   12. <em class="text-info "> B. N. Saha</em>, N. Ray, and H.
//                   Zhang, “Snake validation: A pca-based outlier detection
//                   method,” IEEE Signal Processing Letters, vol. 16, pp. 549–552,
//                   2009, impact factor 3.109 (40 google scholar citations).
//                 </p>

//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   13. <em class="text-info "> B. N. Saha</em> and N. Ray, “Image
//                   thresholding by variational minimax optimization,” Pattern
//                   Recognition, vol. 42, pp. 843–856, 2009, impact factor 7.740
//                   (80 google scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   14. <em class="text-info "> B. N. Saha</em>, A. Saini, N. Ray,
//                   R. Greiner, J. Hugh, and M. Tambasco, “A robust convergence
//                   index filter for breast cancer cell segmentation,” in
//                   Proceedings of the IEEE International Conference on Image
//                   Processing (ICIP), 2014. IEEE, 2014, pp. 922–926, acceptance
//                   rate ~40%.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   15. <em class="text-info "> B. N. Saha</em>, S. Natarajan, G.
//                   Kota, C. T. Whitlow, D. Bowden, J. Divers, B. I. Freedman, and
//                   J. A. Maldjian, “A novel hierarchical level set with ar-boost
//                   for white matter lesion segmentation in diabetes,” in
//                   Proceedings of the 11th International Conference on Machine
//                   Learning and Applications (ICMLA), 2012, vol. 1. IEEE, 2012,
//                   pp. 90–95.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   16. S. Natarajan, S. Joshi,{" "}
//                   <em class="text-info "> B. N. Saha</em>, A. Edwards, T. Khot,
//                   E. Moody, K. Kersting, C. T. Whitlow, and J. A. Maldjian, “A
//                   machine learning pipeline for three-way classification of
//                   alzheimer patients from structural magnetic resonance images
//                   of the brain,” in Proceedings of the 11th International
//                   Conference on Machine Learning and Applications (ICMLA), 2012,
//                   vol. 1. IEEE, 2012, pp. 203–208.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   17. S. Mukherjee, <em class="text-info "> B. N. Saha</em>, I.
//                   Jamal, R. Leclerc, and N. Ray, “A novel framework for
//                   automatic passenger counting,” in Proceedings of the 18th IEEE
//                   International Conference on Image Processing (ICIP), Brussels,
//                   Belgium, 2011, pp. 2969–2972, acceptance rate ~40% (53 google
//                   scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   18. <em class="text-info "> B. N. Saha</em>, N. Ray, and H.
//                   Zhang, “Automating snakes for multiple objects detection,” in
//                   Proceedings of the Asian Conference on Computer Vision (ACCV).
//                   Springer, 2010, pp. 39–51, acceptance rate ~29% (5 google
//                   scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   19. N. Ray, <em class="text-info "> B. N. Saha</em>, and H.
//                   Zhang, “Change detection and object segmentation: A histogram
//                   of features-based energy minimization approach,” in
//                   Proceedings of the IEEE International Conference of Computer
//                   Vision, Graphics and Image Processing (ICVGIP). IEEE, 2008,
//                   pp. 628–635, acceptance rate ~29% (7 google scholar
//                   citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   20. N. Ray, <em class="text-info "> B. N. Saha</em>, and S. T.
//                   Acton, “Oil sand image segmentation using the inclusion
//                   filter,” in Proceedings of the 15th IEEE International
//                   Conference of Image Processing (ICIP). IEEE, 2008, pp.
//                   2188–2191, acceptance rate ~45%.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   21. <em class="text-info "> B. N. Saha</em>, N. Ray, and H.
//                   Zhang, “Computing oil sand particle size distribution by
//                   snake-pca algorithm,” in Proceedings of the IEEE International
//                   Conference on Acoustics, Speech and Signal Processing
//                   (ICASSP), 2008. IEEE, 2008, pp. 977–980, acceptance rate ~48%
//                   (9 google scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   22. N. Ray and <em class="text-info "> B. N. Saha</em>,
//                   “Deformable object tracking: A kernel density estimation
//                   approach via level set function evolution,” in Proceedings of
//                   the International Conference on Pattern Recognition and
//                   Machine Intelligence (PReMI), 2007, pp. 624–631, acceptance
//                   rate ~25%.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   23. N. Ray, <em class="text-info "> B. N. Saha</em>, and M.
//                   Brown, “Locating brain tumor from mr imagery using symmetry,”
//                   in Proceedings of the Conference Record of the Forty-First
//                   Asilomar Conference on Signals, Systems and Computers, 2007.
//                   ACSSC 2007. IEEE, 2007, pp. 224–228, acceptance rate ~40% (52
//                   google scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   24. N. Ray and <em class="text-info "> B. N. Saha</em>, “Edge
//                   sensitive variational image thresholding,” in Proceedings of
//                   IEEE International Conference of Image Processing (ICIP), vol.
//                   6. IEEE, 2007, pp. 37–40, acceptance rate ~45% (45 google
//                   scholar citations).
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   25. Narayanagari Lekhasree, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, (2021). Evaluation
//                   and Development of Artificial Intelligence Tools to Assess
//                   COVID-19 Severe Acute Respiratory Syndromes from Chest
//                   Imaging. Student Research Forum, Concordia University of
//                   Edmonton (CUE), Edmonton, Alberta, Canada
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   26. *Ayandeyi Adeola Adetokunbo, and
//                   <em class="text-info "> B. N. Saha</em>Nath. (2021). Semi
//                   Supervised Learning for Understanding the Effects of COVID-19
//                   on Mental Health from Twitter Data. Student Research Forum,
//                   Concordia University of Edmonton (CUE), Edmonton, Alberta,
//                   Canada
//                 </p>
//                 <br />
//               </section>

//               <section id="example-4" class="blog_ct intro_title">
//                 <h1>AUTOMATION OF MANUFACTURING OPERATIONS BY ROBOTS</h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   To enhance industrial production efficiency, I developed
//                   computer vision-based solutions for autonomous parts mating,
//                   peg-in-hole insertion, and assembly operations. Our approach
//                   com- bines fast template matching with precise camera
//                   calibration to accurately identify workpieces (e.g., pegs and
//                   holes) in complex and occluded environments. We addressed
//                   position uncer- tainty by formulating it as a variant of the
//                   Traveling Salesman Problem and applied dynamic programming for
//                   optimal alignment. This system was successfully deployed on
//                   industrial robots, including the Motoman MH-6, SDA-20
//                   dual-arm, and Cartesian gantry platforms, demonstrating robust
//                   performance in real-world manufacturing settings.
//                   Additionally, I developed two signal classification
//                   algorithms—Bayesian Network (BN) and Autoregressive Dynamic
//                   Learning - to classify force and torque signals corresponding
//                   to four failure types: insertion failure, obstruction,
//                   jamming, and frontal collision. To further optimize the
//                   insertion process, we implemented Gaussian Mixture Regression
//                   (GMR)-based impedance control. For solving the robot inverse
//                   kinematics problem, I enhanced the Genetic Algorithm (GA) by
//                   embedding domain knowledge into all key stages—initialization,
//                   selection, crossover, and mutation—achieving faster and more
//                   reliable convergence. These methodologies have been validated
//                   through successful deployment on industrial robotic systems.
//                   The associated research has been published in peer-reviewed
//                   venues, as listed below.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   27. D. Ortega-Aranda, J. F. Jimenez-Vielma,{" "}
//                   <em class="text-info "> B. N. Saha</em>, and I. Lopez-Juarez,
//                   “Dual-arm peg-in-hole assembly using dnn with double
//                   force/torque sensor,” Applied Sciences, vol. 11, no. 15, 2021.
//                   [Online]. Available: https://www.mdpi.com/2076-3417/11/15/6970
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   28. D. Ortega-Aranda, I. Lopez-Juarez,{" "}
//                   <em class="text-info "> B. N. Saha</em>, R. Osorio-Comparan,
//                   M. P. na Cabrera, and G. Lefrnc, “Learning contact states
//                   during peg-in-hole assembly with a dual-arm robot,” in
//                   Proceedings of the IEEE CHILECON, 2017, pp. 1–6.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   29. A. S. Cienfuegos, <em class="text-info "> B. N. Saha</em>,
//                   J. Romero-Hdz, and D. Ortega, “Efficient integration of
//                   template matching , calibration and triangulation for
//                   automating peg hole insertion task using two cameras,” SSRG
//                   International Journal of Computer Science and Engineering
//                   (SSRG-IJCSE), vol. 3, pp. 61–70, Nov. 2016, impact factor
//                   2.150.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   30. E. Rodriguez, <em class="text-info "> B. N. Saha</em>, J.
//                   Romero-Hdz, and D. Ortega, “A multi-objective differential
//                   evolution algorithm for robot inverse kinematics,” SSRG
//                   International Journal of Computer Science and Engineering
//                   (SSRG-IJCSE), vol. 3, pp. 71–79, Nov. 2016, impact factor
//                   2.150.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   31. J. Alonso-Tovar, <em class="text-info "> B. N. Saha</em>,
//                   J. Romero-Hdz, and D. Ortega, “Bayesian network classifier
//                   with efficient statistical time-series features for the
//                   classification of robot execution failures,” SSRG
//                   International Journal of Computer Science and Engineering
//                   (SSRG-IJCSE), vol. 3, pp. 80–89, Nov. 2016, impact factor
//                   2.150.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   32. A. Sauceda, E. Rodriguez, J. Romero, D. Ortega, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “Implementation of
//                   computer vision guided peg-hole insertion task performed by
//                   robot through labview,” MICAI 2016, Part I, Lecture Notes in
//                   Artificial Intelligence (LNAI) 10061, pp. 437–458, 2017.
//                 </p>
//               </section>

//               <section id="example-5" class="blog_ct intro_title">
//                 <h1>AUTOMATION AND OPTIMIZATION OF WELDING PROCESS</h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   Welding deformation presents significant challenges in metal
//                   joining, often leading to design constraints, increased
//                   rework, elevated quality control costs, and higher capital
//                   expenditures. Optimizing the welding sequence is critical to
//                   minimizing deformation and residual stress; however, this task
//                   is computationally intensive due to its complex combinatorial
//                   nature. To tackle this, I implemented a suite of optimization
//                   techniques—including a Modified Lowest Cost Search (MLCS), a
//                   multi-objective Genetic Algorithm (GA), and a Reinforcement
//                   Learn- ing (RL) framework—to generate pseudo-optimal welding
//                   sequences that effectively reduce deformation and residual
//                   stress. Notably, our research was the first to demonstrate the
//                   com- bined use of Low Temperature Transform (LTT) and
//                   conventional wire for welding sequence optimization, resulting
//                   in a significant improvement in weldment fatigue life. These
//                   contributions have been validated through experimental studies
//                   and documented in the peer-reviewed publications listed below.
//                 </p>

//                 <p class="book_content fs-5 text-secondary">
//                   33. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, J.
//                   Vallikavungal, and P. del C. Z. Robledo, “OpenAM-SimCCX: An
//                   Open-Source Framework for Thermo-Mechanical Analysis of
//                   Additive Manufacturing with CalculiX," Materials. 18(4990): 1
//                   - 40, 2025.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   34. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, N.
//                   Hofbauer, and P. del C. Z. Robledo, “Os-weldsim: An
//                   open-source framework for finite element-based welding
//                   simulation,” The International Journal of Advanced
//                   Manufacturing Technology. 2025.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   35. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, S.
//                   Tstutsumia, R. Fincatoa, and G. Toledo, “Incorporating domain
//                   knowledge into reinforcement learning to expedite welding
//                   sequence optimization,” in Engineering Applications of
//                   Artificial Intelligence, vol. 91, 2020, pp. 1–10.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   36. “Statistical validation of weldment deformation through
//                   welding simulation and 3d optical scanning,” in Proceedings of
//                   the Welding Structure Symposium, 2017, pp. 1–8.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   37. J. Romero-Hdz, S. Tstutsumia, R. Fincatoa, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “Influence of welding
//                   sequence on residual stress and deformation pattern using
//                   conventional and ltt wires,” in Proceedings of the Welding
//                   Structure Symposium, 2017, pp. 1–8.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   38. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, G.
//                   Toledo, and I. Lopez, “A reinforcement learning based approach
//                   for welding sequence optimization,” Transactions on
//                   Intelligent Welding Manufacturing, pp. 33–45, 2017.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   39. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>,
//                   and G. Toledo, “Welding sequence optimization through a
//                   modified lowest cost search algorithm,” Computer Science and
//                   Engineering, vol. 6, pp. 25–32, 2016.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   40. J. Romero-Hdz, S. Aranda, G. Toledo-Ramirez, J. Segura,
//                   and <em class="text-info "> B. N. Saha</em>, “Deformation and
//                   residual stress based multiobjective genetic algorithm for
//                   welding sequence optimization,” Journal of Research in
//                   Computing Science, vol. 132, pp. 155–179, 2017.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   41. J. Romero-Hdz, S. Aranda, G. Toledo, J. Segura, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “An elitism based
//                   genetic algorithm for welding sequence optimization to reduce
//                   deformation,” Journal of Research in Computing Science, vol.
//                   121, pp. 17–36, 2016.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   42. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>, G.
//                   Toledo-Ramirez, and D. Beltran-Bqz, “Welding sequence
//                   optimization using artificial intelligence techniques, an
//                   overview,” SSRG International Journal of Computer Science and
//                   Engineering (SSRG-IJCSE), vol. 3, pp. 90–95, Nov. 2017, impact
//                   factor 2.150.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   43. J. Romero-Hdz, <em class="text-info "> B. N. Saha</em>,
//                   and G. Toledo, “Deformation driven fast and approximate
//                   shortest path algorithm for selecting a pseudo-optimal welding
//                   sequence,” Global Conference on Engineering and Applied
//                   Science, vol. GCEAS-487, pp. 439–449, 2016.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   44. J. Romero-Hdz, G. Toledo, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “Deformation and
//                   residual stress based multiobjective genetic algorithm for
//                   welding sequence optimization,” in 2016 Fifteenth Mexican
//                   International Conference on Artificial Intelligence (MICAI),
//                   Oct 2016, pp. 80–91.
//                 </p>
//                 <br />
//               </section>

//               <section id="example-6" class="blog_ct intro_title">
//                 <h1>RELIABILITY AND OPTIMIZATION FOR PREDICTIVE MAINTENANCE</h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   Prognostics have gained increasing attention due to the
//                   critical need for accurate estimation of Remaining Useful Life
//                   (RUL) in diverse applications. My research focuses on
//                   developing machine learning-based prognostic models for both
//                   electric motors and cancer patients, with the goal of
//                   improving predictive accuracy and reliability. In parallel, I
//                   have worked on optimizing design parameters for life testing
//                   plans under censoring schemes using genetic algorithm-based
//                   multi-objective optimization. A particular focus has been
//                   placed on progressive censoring, a complex combinatorial
//                   optimization problem. To address its computational challenges,
//                   I introduced a novel restricted weak integer composition-
//                   based sample initialization algorithm, which significantly
//                   accelerates convergence and enhances the robustness of the
//                   Genetic Algorithm. These advancements contribute to more
//                   efficient and reliable prognostic modeling and testing
//                   strategies. Related publications are listed below.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   45. R. Bhattacharya, <em class="text-info "> B. N. Saha</em>,
//                   G. González-Farías, and N. Balakrishnan, “Multi-criteria based
//                   optimum life testing plans under hybrid censoring,” Test, pp.
//                   1–24, 2019.
//                 </p>
//                 <br />
//               </section>

//               <section id="example-7" class="blog_ct intro_title">
//                 <h1>COMPUTATIONAL COGNITIVE SCIENCE</h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   One of my research areas focuses on developing mathematical
//                   models and computational sim- ulations to deepen our
//                   understanding of human perception, cognition, learning, and
//                   behavioral psychology. As part of this work, I have designed
//                   novel statistical models and introduced a new statistical
//                   visualization technique - the pie-bubble chart - to analyze
//                   complex perceptual data. My research addresses key topics such
//                   as color perception, the influence of digital diversion in
//                   mitigating curriculum-related stress, and the perceptual
//                   characteristics of computer-generated biological imagery that
//                   trigger horripilation (goosebumps). These interdisciplinary
//                   efforts bridge computational modeling with psychological
//                   theory, offering new insights into human responses to digital
//                   stimuli. The findings from this work are detailed in the
//                   publications listed below.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   46. T. P. Mukhopadhyay,{" "}
//                   <em class="text-info "> B. N. Saha</em>, N. Gurieva, and R. T.
//                   Lopez, “Rosa mexicano: the social optics of a color
//                   neologism,” Journal of the International Colour Association,
//                   pp. 1–16, 2017.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   47. T. P. Mukhopadhyay, M. Siprut, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “Digital diversions
//                   in education: Interactive multimedia for adolescent motivation
//                   in unilateral classroom scenarios,” International Journal of
//                   Innovation, Creativity and Change, vol. 3, pp. 60–74, 2017.
//                 </p>
//                 <br />
//               </section>

//               <section id="example-8" class="blog_ct intro_title">
//                 <h1>
//                   NATURAL LANGUAGE PROCESSING IN RESOURCE-SCARCE LANGUAGES
//                 </h1>
//                 <br />
//                 <p className="pub_content text-secondary text-left fs-5 lh-base">
//                   My research in Natural Language Processing (NLP) focuses on
//                   developing innovative solutions for key challenges such as
//                   anaphora resolution, sentiment analysis, fake news detection,
//                   hate speech and offensive content identification, and text
//                   summarization, particularly for resource- scarce languages.
//                   These languages present unique challenges due to limited
//                   annotated datasets and significant linguistic diversity. To
//                   address these challenges, we employ strategies such as
//                   transfer learning, multilingual models, and community-driven
//                   data collection. For example, our work on anaphora resolution
//                   in Bengali integrates linguistic domain knowledge to enhance
//                   traditional machine learning models like Support Vector
//                   Machines, Decision Trees, and AdaBoost. We have also developed
//                   deep learning frameworks—including LSTM-based
//                   architectures—for sentiment analysis and hate speech detection
//                   in low-resource Indo-European languages using social media
//                   data. These efforts are aimed at improving the generalization
//                   capabilities of NLP models across diverse linguistic contexts
//                   and contributing to the preservation and digital
//                   representation of underrepresented languages. Our research
//                   bridges computational methods with linguistic in- sights to
//                   support the development of inclusive and effective NLP tools.
//                   Publications in this area are listed below.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   48. A. Bahuguna, D. Yadav, A. Senapati, and{" "}
//                   <em class="text-info "> B. N. Saha</em>, “A unified deep
//                   neuro-fuzzy approach for covid-19 twitter sentiment
//                   classification,” in 8th International Symposium on Language &
//                   Knowledge Engineering
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   49. <em class="text-info "> B. N. Saha</em>, A. Senapati, and
//                   U. Garain, “A deep learning framework for anaphora resolution
//                   from social media text,” in 3rd International Conference on
//                   Machine Intelligence and Signal Processing (MISP), 2021.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   50. A. A. Ayandeyi and <em class="text-info "> B. N. Saha</em>
//                   , “Twitter data sentiment analysis to understand effect of
//                   covid-19 on mental health,” in Intelligent Computing and
//                   Technologies Conference (ICTCON), 2021, pp. 174–179.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   51. <em class="text-info "> B. N. Saha</em> and A. Senapati,
//                   “Hate speech and offensive content identification: Lstm based
//                   deep learning approach @ hasoc 2020,” in Working Notes of FIRE
//                   2020 - Forum for Information Retrieval Evaluation, 2020, pp.
//                   290–297.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   52. Long short term memory (lstm) based deep learning for
//                   sentiment analysis of english and spanish data,” in
//                   International Conference on Computational Performance
//                   Evaluation (ComPE), 2020, pp. 1–5.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   53. <em class="text-info "> B. N. Saha</em>, A. Senapati, and
//                   A. Mahajan, “Lstm based deep rnn architecture for election
//                   sentiment analysis from bengali newspaper,” in International
//                   Conference on Computational Performance Evaluation (ComPE),
//                   2020, pp. 1–6.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   54. A. Senapati, A. Poudyal, P. Adhikary, S. Kaushar, A.
//                   Mahajan, and <em class="text-info "> B. N. Saha</em>, “A
//                   machine learning approach to anaphora resolution in nepali
//                   language,” in International Conference on Computational
//                   Performance Evaluation (ComPE), 2020, pp. 1–6.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   55. <em class="text-info "> B. N. Saha</em> and A. Senapati,
//                   “Lstm based deep rnn architecture for hate speech and
//                   offensive content (hasoc) identification in indo – european
//                   languages,” in The 11th meeting of Forum for Information
//                   Retrieval Evaluation (FIRE), 2019.
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   56. Malhotra Shubham, and{" "}
//                   <em class="text-info "> B. N. Saha</em>. (2021).
//                   COVID-19Chatbot: A natural language processing and artificial
//                   Intelligence powered intelligent virtual assistant to create
//                   awareness during pandemic. Undergraduate Research in Science
//                   Conference of Alberta (URSCA), Edmonton, Alberta, Canada
//                 </p>
//                 <br />

//                 <p class="book_content fs-5 text-secondary">
//                   57. Avalloni de Morais Rene, and
//                   <em class="text-info "> B. N. Saha</em>. (2021). Customer
//                   Sentiment Analysis from Audio Data Using Deep Learning.
//                   Student Research Forum, Concordia University of Edmonton
//                   (CUE), Edmonton, Alberta, Canada
//                 </p>
//                 <br />
//               </section>

//               <section id="example-9" class="blog_ct intro_title">
//                 <h1>OTHERS</h1>
//                 <br />
//                 <section id="example-sub-A-collapsible">
//                   <h5 class="book_title">SIGNALS PROCESSING</h5>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     We propose a deep learning based end-to-end architecture for
//                     speech recognition.
//                   </p>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     This research proposes a deep learning-based end-to-end
//                     architecture for speech recognition, designed to improve
//                     both accuracy and efficiency across diverse linguistic
//                     contexts. The ar- chitecture integrates multiple layers of
//                     neural networks to directly process raw audio input,
//                     eliminating the need for manual feature extraction and
//                     simplifying the recognition pipeline. By leveraging advanced
//                     deep learning models, the system effectively learns complex
//                     speech patterns, enhancing performance in noisy environments
//                     and enabling robust recognition across various speech types.
//                   </p>
//                   <br />
//                   <p class="book_content fs-5 text-secondary">
//                     58. R. A. de Morais and
//                     <em class="text-info"> B. N. Saha</em>, “End-to-end speech
//                     recognition using recurrent neural network (rnn),” in
//                     Intelligent Computing and Technologies Conference (ICTCON),
//                     2021, pp. 152–158. The evolution of snake toward automation
//                     for multiple blob-object segmentation. LAP Lambert Academic
//                     Publishing, 2012
//                   </p>
//                   <br />
//                 </section>

//                 <section id="example-sub-B-collapsible">
//                   <h5 class="book_title">NETWORK SECURITY</h5>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     This research demonstrates how machine learning can predict
//                     distributed denial of service attack and save financial
//                     institutions from cyber attacks.
//                   </p>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     Distributed Denial-of-Service (DDoS) attacks pose
//                     significant threats to financial institutions by
//                     overwhelming networks and disrupting services. To counter
//                     these threats, machine learn- ing (ML) offers predictive
//                     capabilities to identify and mitigate potential DDoS
//                     attacks. In the study “Using Machine Learning to Predict
//                     Distributed Denial-of-Service (DDoS) Attack” by Qozeem
//                     Adeniyi Adeshina and Baidya Nath Saha, published in the
//                     Proceedings of the Intelligent Computing and Technologies
//                     Conference (ICTCon2021), the authors explore the development
//                     of ML classifiers to detect DDoS attacks before they occur.
//                     Using the KDD-99 dataset, a comprehensive network traffic
//                     dataset, the researchers trained various ML classifiers to
//                     distinguish between normal and DDoS traffic across protocols
//                     like ICMP, TCP, and UDP. The study employed seven distinct
//                     feature selection techniques and applied them to ten
//                     different ML classifiers to enhance attack detection
//                     accuracy. The find- ings demonstrated that certain
//                     classifiers could predict DDoS attacks effectively within
//                     short timeframes, providing valuable insights for preemptive
//                     security measures. Integrating these machine learning models
//                     into the cybersecurity infrastructure of financial
//                     institutions can significantly enhance defenses against DDoS
//                     attacks. By accurately predict- ing and identifying
//                     malicious traffic patterns, these models enable timely
//                     responses, ensuring service continuity and the protection of
//                     financial assets. This research highlights the potential of
//                     machine learning in strengthening cybersecurity measures
//                     within the financial sector.
//                   </p>
//                   <br />

//                   <p class="book_content fs-5 text-secondary">
//                     59. M. D. M. Islam, C. S. P.
//                     <em class="text-info"> B. N. Saha</em>, S. Parvin, W. M.
//                     Abdullah, and K. F. Hasan, “A privacy-preserving trustworthy
//                     behavioral authentication system,” ACM Transactions on
//                     Privacy and Security (TOPS) (Submitted), 2025.
//                   </p>
//                   <br />

//                   <p class="book_content fs-5 text-secondary">
//                     60. Q. A. Adeshina and
//                     <em class="text-info"> B. N. Saha</em>, “Using machine
//                     learning to predict distributed denial-ofservice (ddos)
//                     attack,” in Intelligent Computing and Technologies
//                     Conference (ICTCON), 2021, pp. 159–169.
//                   </p>
//                   <br />

//                   <p class="book_content fs-5 text-secondary">
//                     61. Chaudhary Jainth, and
//                     <em class="text-info"> B. N. Saha</em>. (2021). SAFE AI:
//                     Privacy preserving machine learning algorithms for trust
//                     sensitive environments. Undergraduate Research in Science
//                     Conference of Alberta (URSCA), Edmonton, Alberta, Canada.
//                   </p>
//                   <br />

//                   <p class="book_content fs-5 text-secondary">
//                     62. Adeshina Qozeem Adeniyi, and
//                     <em class="text-info"> B. N. Saha</em>. Nath. (2021).
//                     Evaluation and Development of Machine Learning Based
//                     Algorithms for Predicting Distributed Denial of Service
//                     Attack (DDoS). Student Research Forum, Concordia University
//                     of Edmonton (CUE), Edmonton, Alberta, Canada
//                   </p>
//                   <br />
//                 </section>

//                 <section id="example-sub-C-collapsible">
//                   <h5 class="book_title">INTERNET OF THINGS</h5>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     This research introduces a machine learning-driven Internet
//                     of Things (IoT) smart healthcare kit designed to enhance
//                     patient care through continuous online monitoring of vital
//                     health indi- cators. The study also explores diagnostic
//                     applications, utilizing K-Nearest Neighbor (K-NN) and Random
//                     Forest classifiers for heart disease prediction based on
//                     pathology data. Addi- tionally, the VGG-19 deep learning
//                     architecture is employed for lung disease detection from
//                     X-ray images. These machine learning models support
//                     physicians in accurate disease diagnosis, ultimately
//                     improving patient outcomes. This research highlights how
//                     integrating machine learning with IoT technologies can
//                     revolu- tionize healthcare delivery by enabling remote
//                     monitoring and early disease detection.
//                   </p>
//                   <br />
//                   <p class="book_content fs-5 text-secondary">
//                     63. L. Narayanagari and
//                     <em class="text-info"> B. N. Saha</em>, “Machine learning
//                     driven iot based smart health care kit,” in Intelligent
//                     Computing and Technologies Conference (ICTCON), 2021, pp.
//                     180– 185.
//                   </p>
//                   <br />
//                 </section>

//                 <section id="example-sub-D-collapsible">
//                   <h5 class="book_title">SOFTWARE ENGINEERING</h5>
//                   <p className="pub_content text-secondary text-left fs-5 lh-base">
//                     This research proposes a machine learning-based approach for
//                     software test case selection, designed to optimize
//                     regression testing with limited resources. By leveraging
//                     machine learning models, the study improves the efficiency
//                     of test case selection, enabling software testing teams to
//                     prioritize the most critical cases. The approach involves
//                     data preprocessing, including converting categorical data
//                     into numerical values, and applyingnatural language
//                     processing (NLP) techniques to extract relevant features
//                     from test case titles. Experimental results show that this
//                     machine learning-driven method significantly reduces man-
//                     ual efforts by automating test case selection, leading to
//                     substantial time and resource savings while enhancing
//                     overall testing efficiency.
//                   </p>
//                   <p class="book_content fs-5 text-secondary">
//                     64.S. Parvin, W. M. Abdullah, and K. F. Hasan, “A
//                     privacy-preserving trustworthy behavioral authentication
//                     system,” ACM Transactions on Privacy and Security (TOPS)
//                     (Submitted), 2025.
//                   </p>
//                   <br />
//                   <p class="book_content fs-5 text-secondary">
//                     65. V. Cheruiyot and
//                     <em class="text-info"> B. N. Saha</em>, “A machine learning
//                     based approach for software test case selection,” in
//                     Intelligent Computing and Technologies Conference (ICTCON),
//                     2021, pp. 186–189.
//                   </p>
//                   <br />
//                   <p class="book_content fs-5 text-secondary">
//                     66. Wali Mohammad Abdullah, Md. Morshedul Islam, Devraj
//                     Parmar, Happy Hasmukhbhai Patel, Sindhuja Prabhakaran,{" "}
//                     <em class="text-info"> B. N. Saha</em>. (2025). RAILS:
//                     Retrieval-Augmented Intelligence for Learning Software
//                     Development. Proceedings of IEEE High Performance Extreme
//                     Computing Virtual Conference. IEEE High Performance Extreme
//                     Computing Virtual Conference, (1-6)
//                   </p>
//                   <br />
//                 </section>
//               </section>
//             </section>
//             <hr className="divider" />
//             <section id="example-10">
//               <h2>LONG TERM RESEARCH GOALS</h2>
//               <br />
//               <p class="pub_content text-justify fs-5 lh-base">
//                 In the long term, my research interests are centered on solving
//                 application-driven, large-scale big data analysis challenges. I
//                 believe that while engineering solutions are essential, they are
//                 insufficient on their own to address such complex problems in
//                 real-world applications. Theoretical advancements are crucial
//                 for developing optimal solutions to these challenges. Citations
//                 of my publications are available via the following bibliometrics
//                 link: Google Scholar Citations
//                 <br />
//                 <br />
//                 Bibliometrics URL:{" "}
//                 <em class="text-info">
//                   https://scholar.google.com/citations?user=HkY4OJgAAAAJ&hl=en
//                 </em>{" "}
//               </p>
//               <br />
//             </section>
//             <br />
//             <br />
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Publications;

import React from "react";
import { useLocation } from "react-router-dom";
import WhiteNavBar from "./WhiteNavBar";

function Publications() {
  const location = useLocation();
  const routeName = location.pathname;

  // Function for Books section
  const renderBooks = () => (
    <section id="example-1" className="blog_ct intro_title">
      <h1>BOOKS & BOOK CHAPTERS</h1>
      <br />
      <p className="book_content fs-5 text-secondary">
        1.
        <em className="text-info "> B. N. Saha</em>, The evolution of snake
        toward automation for multiple blob-object segmentation. LAP Lambert
        Academic Publishing, 2012
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        2. A. González-Cantú, M. E. Romero-Ibarguengoitia, and{" "}
        <em className="text-info">B. N. Saha</em>, Classification of Left
        Ventricular Hypertrophy and NAFLD Through Decision Tree Algorithm.
        Chapman and Hall/CRC Press, Taylor & Francis Group, Editors Ayman
        El-Baz, Jasjit S. Suri, 2021.
      </p>
    </section>
  );

  // Function for Machine Learning section
  const renderMachineLearning = () => (
    <section id="example-2" className="blog_ct">
      <h1>ADVANCEMENTS OF MACHINE LEARNING ALGORITHM</h1>
      <br />
      <p className="pub_content text-justify fs-5 lh-base">
        One of my key research interests is integrating novel data-driven
        regularization strategies into classification algorithms such as
        AdaBoost, Support Vector Machines (SVM), and Decision Trees. These
        strategies aim to reduce test error by mitigating overfitting and
        promoting early convergence. In this context, I have developed two
        innovative algorithms: Adaptive Regularized Boosting (AR-Boost) and kNN
        regularized Support Vector Machine (kNN-SVM). Relevant publications are
        listed below.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        3.
        <em className="text-info"> B. N. Saha</em>, Pavan Sarvaiya , Wali
        Mohammad Abdullah, Md. Morshedul Islam. (2025). CRAMP: Categorizing
        Classifiers and Regressors for Scalable Parallelism on Distributed and
        Multicore Systems. Proceedings of IEEE High Performance Extreme
        Computing Virtual Conference. IEEE High Performance Extreme Computing
        Virtual Conference, (1-6).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        4.
        <em className="text-info"> B. N. Saha</em>, G. Kunapuli, N. Ray, J. A.
        Maldjian, and S. Natarajan, "Ar-boost: Reducing overfitting by a robust
        data-driven regularization strategy," in Joint European Conference on
        Machine Learning and Knowledge Discovery in Databases (ECMLPKDD).
        Springer, 2013, pp. 1–16, acceptance rate ~25%.
      </p>
      <br />
    </section>
  );

  // Function for Computer Vision section
  const renderComputerVision = () => (
    <section id="example-3" className="blog_ct intro_title">
      <h1>COMPUTER VISION & IMAGE PROCESSING</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        My research focuses on advancing algorithms for segmentation, filtering,
        tracking, registration, object localization, detection, and
        validation—leveraging techniques such as Principal Compo- nent Analysis
        (PCA) and Adaptive Regularized Boosting (AR-Boost). I have developed
        several novel methods, including Probabilistic Quad Tree (PQT) and Fast
        Bounding Box (FBB) for approximate segmentation, automatic snake-based
        segmentation algorithms, Hierarchical Level Set (HLS), Topological Graph
        Cut (TGC), Robust Convergence Index (RCI), and the Inclusion Filter.
        Additionally, I have applied Statistical Relational Learning (SRL) for
        Alzheimer's dis- ease prediction and designed a Minimum Spanning Tree
        (MST)-based sequence optimization algorithm for registering long,
        time-sequenced microscopic images. Relevant publications are listed
        below.
      </p>

      <p className="book_content fs-5 text-secondary">
        5. A. Bahuguna, D. Yadav, A. Senapati, and
        <em className="text-info "> B. N. Saha</em>, "knn-svm with deep features
        for covid-19 pneumonia detection from chest x-ray," in Mathematics and
        Computing, B. Rushi Kumar, S. Ponnusamy, D. Giri, B. Thuraisingham, C.
        W. Clifton, and B. Carminati, Eds. Singapore: Springer Nature Singapore,
        2022, pp. 103–115.{" "}
      </p>

      <p className="book_content fs-5 text-secondary">
        6. T. A. Asif and<em className="text-info "> B. N. Saha</em>, "Instagram
        image filtration with computer vision," in Intelligent Computing and
        Technologies Conference (ICTCON), 2021, pp. 170–173.{" "}
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        7.
        <em className="text-info "> B. N. Saha</em>, N. Ray, S. McArdle, and K.
        Ley, "Selecting the optimal sequence for deformable registration of
        microscopy image sequences using a two-stage mst-based clustering
        algorithm," in Medical Image Computing and Computer Assisted
        Intervention - MICCAI 2017: 20th International Conference, Quebec City,
        QC, Canada, September 11- 13, 2017, Proceedings. Springer International
        Publishing, 2017, pp. 353–361, acceptance rate ~32% (rank 1 conference
        in computer science).
      </p>
      <br />
      <p className="book_content fs-5 text-secondary">
        8. "A two-stage minimum spanning tree (mst) based clustering algorithm
        for 2d deformable registration of time sequenced images," in Proceedings
        of IEEE International Conference on Image Processing (ICIP), 2017, pp.
        1472–1476.
      </p>
      <br />
      <p className="book_content fs-5 text-secondary">
        9. S. Natarajan, <em className="text-info "> B. N. Saha</em>, S. Joshi,
        A. Edwards, T. Khot, E. M. Davenport, K. Kersting, C. T. Whitlow, and J.
        A. Maldjian, "Relational learning helps in three-way classification of
        alzheimer patients from structural magnetic resonance images of the
        brain," International Journal of Machine Learning and Cybernetics, vol.
        5, no. 5, pp. 659–669, 2014, impact factor 3.753 (15 google scholar
        citations).
      </p>
      <br />
      <p className="book_content fs-5 text-secondary">
        10. J. A. Maldjian, C. T. Whitlow,{" "}
        <em className="text-info "> B. N. Saha</em>, G. Kota, C. Vandergriff, E.
        M. Davenport, J. Divers, B. I. Freedman, and D. W. Bowden, "Automated
        white matter total lesion volume segmentation in diabetes," American
        Journal of Neuroradiology, vol. 34, no. 12, pp. 2265–2270, 2013, impact
        factor 3.653 (38 google scholar citations).
      </p>
      <br />
      <p className="book_content fs-5 text-secondary">
        11. <em className="text-info "> B. N. Saha</em>, N. Ray, R. Greiner, A.
        Murtha, and H. Zhang, "Quick detection of brain tumors and edemas: A
        bounding box method using symmetry," Computerized Medical Imaging and
        Graphics, vol. 36, no. 2, pp. 95–107, 2012, impact factor 6.418 (127
        google scholar citations).
      </p>
      <br />
      <p className="book_content fs-5 text-secondary">
        12. <em className="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang,
        "Snake validation: A pca-based outlier detection method," IEEE Signal
        Processing Letters, vol. 16, pp. 549–552, 2009, impact factor 3.109 (40
        google scholar citations).
      </p>

      <br />

      <p className="book_content fs-5 text-secondary">
        13. <em className="text-info "> B. N. Saha</em> and N. Ray, "Image
        thresholding by variational minimax optimization," Pattern Recognition,
        vol. 42, pp. 843–856, 2009, impact factor 7.740 (80 google scholar
        citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        14. <em className="text-info "> B. N. Saha</em>, A. Saini, N. Ray, R.
        Greiner, J. Hugh, and M. Tambasco, "A robust convergence index filter
        for breast cancer cell segmentation," in Proceedings of the IEEE
        International Conference on Image Processing (ICIP), 2014. IEEE, 2014,
        pp. 922–926, acceptance rate ~40%.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        15. <em className="text-info "> B. N. Saha</em>, S. Natarajan, G. Kota,
        C. T. Whitlow, D. Bowden, J. Divers, B. I. Freedman, and J. A. Maldjian,
        "A novel hierarchical level set with ar-boost for white matter lesion
        segmentation in diabetes," in Proceedings of the 11th International
        Conference on Machine Learning and Applications (ICMLA), 2012, vol. 1.
        IEEE, 2012, pp. 90–95.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        16. S. Natarajan, S. Joshi, <em className="text-info "> B. N. Saha</em>,
        A. Edwards, T. Khot, E. Moody, K. Kersting, C. T. Whitlow, and J. A.
        Maldjian, "A machine learning pipeline for three-way classification of
        alzheimer patients from structural magnetic resonance images of the
        brain," in Proceedings of the 11th International Conference on Machine
        Learning and Applications (ICMLA), 2012, vol. 1. IEEE, 2012, pp.
        203–208.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        17. S. Mukherjee, <em className="text-info "> B. N. Saha</em>, I. Jamal,
        R. Leclerc, and N. Ray, "A novel framework for automatic passenger
        counting," in Proceedings of the 18th IEEE International Conference on
        Image Processing (ICIP), Brussels, Belgium, 2011, pp. 2969–2972,
        acceptance rate ~40% (53 google scholar citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        18. <em className="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang,
        "Automating snakes for multiple objects detection," in Proceedings of
        the Asian Conference on Computer Vision (ACCV). Springer, 2010, pp.
        39–51, acceptance rate ~29% (5 google scholar citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        19. N. Ray, <em className="text-info "> B. N. Saha</em>, and H. Zhang,
        "Change detection and object segmentation: A histogram of features-based
        energy minimization approach," in Proceedings of the IEEE International
        Conference of Computer Vision, Graphics and Image Processing (ICVGIP).
        IEEE, 2008, pp. 628–635, acceptance rate ~29% (7 google scholar
        citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        20. N. Ray, <em className="text-info "> B. N. Saha</em>, and S. T.
        Acton, "Oil sand image segmentation using the inclusion filter," in
        Proceedings of the 15th IEEE International Conference of Image
        Processing (ICIP). IEEE, 2008, pp. 2188–2191, acceptance rate ~45%.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        21. <em className="text-info "> B. N. Saha</em>, N. Ray, and H. Zhang,
        "Computing oil sand particle size distribution by snake-pca algorithm,"
        in Proceedings of the IEEE International Conference on Acoustics, Speech
        and Signal Processing (ICASSP), 2008. IEEE, 2008, pp. 977–980,
        acceptance rate ~48% (9 google scholar citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        22. N. Ray and <em className="text-info "> B. N. Saha</em>, "Deformable
        object tracking: A kernel density estimation approach via level set
        function evolution," in Proceedings of the International Conference on
        Pattern Recognition and Machine Intelligence (PReMI), 2007, pp. 624–631,
        acceptance rate ~25%.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        23. N. Ray, <em className="text-info "> B. N. Saha</em>, and M. Brown,
        "Locating brain tumor from mr imagery using symmetry," in Proceedings of
        the Conference Record of the Forty-First Asilomar Conference on Signals,
        Systems and Computers, 2007. ACSSC 2007. IEEE, 2007, pp. 224–228,
        acceptance rate ~40% (52 google scholar citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        24. N. Ray and <em className="text-info "> B. N. Saha</em>, "Edge
        sensitive variational image thresholding," in Proceedings of IEEE
        International Conference of Image Processing (ICIP), vol. 6. IEEE, 2007,
        pp. 37–40, acceptance rate ~45% (45 google scholar citations).
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        25. Narayanagari Lekhasree, and{" "}
        <em className="text-info "> B. N. Saha</em>, (2021). Evaluation and
        Development of Artificial Intelligence Tools to Assess COVID-19 Severe
        Acute Respiratory Syndromes from Chest Imaging. Student Research Forum,
        Concordia University of Edmonton (CUE), Edmonton, Alberta, Canada
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        26. *Ayandeyi Adeola Adetokunbo, and
        <em className="text-info "> B. N. Saha</em>Nath. (2021). Semi Supervised
        Learning for Understanding the Effects of COVID-19 on Mental Health from
        Twitter Data. Student Research Forum, Concordia University of Edmonton
        (CUE), Edmonton, Alberta, Canada
      </p>
      <br />
    </section>
  );

  // Function for Robots section
  const renderRobots = () => (
    <section id="example-4" className="blog_ct intro_title">
      <h1>AUTOMATION OF MANUFACTURING OPERATIONS BY ROBOTS</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        To enhance industrial production efficiency, I developed computer
        vision-based solutions for autonomous parts mating, peg-in-hole
        insertion, and assembly operations. Our approach com- bines fast
        template matching with precise camera calibration to accurately identify
        workpieces (e.g., pegs and holes) in complex and occluded environments.
        We addressed position uncer- tainty by formulating it as a variant of
        the Traveling Salesman Problem and applied dynamic programming for
        optimal alignment. This system was successfully deployed on industrial
        robots, including the Motoman MH-6, SDA-20 dual-arm, and Cartesian
        gantry platforms, demonstrating robust performance in real-world
        manufacturing settings. Additionally, I developed two signal
        classification algorithms—Bayesian Network (BN) and Autoregressive
        Dynamic Learning - to classify force and torque signals corresponding to
        four failure types: insertion failure, obstruction, jamming, and frontal
        collision. To further optimize the insertion process, we implemented
        Gaussian Mixture Regression (GMR)-based impedance control. For solving
        the robot inverse kinematics problem, I enhanced the Genetic Algorithm
        (GA) by embedding domain knowledge into all key stages—initialization,
        selection, crossover, and mutation—achieving faster and more reliable
        convergence. These methodologies have been validated through successful
        deployment on industrial robotic systems. The associated research has
        been published in peer-reviewed venues, as listed below.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        27. D. Ortega-Aranda, J. F. Jimenez-Vielma,{" "}
        <em className="text-info "> B. N. Saha</em>, and I. Lopez-Juarez,
        "Dual-arm peg-in-hole assembly using dnn with double force/torque
        sensor," Applied Sciences, vol. 11, no. 15, 2021. [Online]. Available:
        https://www.mdpi.com/2076-3417/11/15/6970
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        28. D. Ortega-Aranda, I. Lopez-Juarez,{" "}
        <em className="text-info "> B. N. Saha</em>, R. Osorio-Comparan, M. P.
        na Cabrera, and G. Lefrnc, "Learning contact states during peg-in-hole
        assembly with a dual-arm robot," in Proceedings of the IEEE CHILECON,
        2017, pp. 1–6.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        29. A. S. Cienfuegos, <em className="text-info "> B. N. Saha</em>, J.
        Romero-Hdz, and D. Ortega, "Efficient integration of template matching ,
        calibration and triangulation for automating peg hole insertion task
        using two cameras," SSRG International Journal of Computer Science and
        Engineering (SSRG-IJCSE), vol. 3, pp. 61–70, Nov. 2016, impact factor
        2.150.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        30. E. Rodriguez, <em className="text-info "> B. N. Saha</em>, J.
        Romero-Hdz, and D. Ortega, "A multi-objective differential evolution
        algorithm for robot inverse kinematics," SSRG International Journal of
        Computer Science and Engineering (SSRG-IJCSE), vol. 3, pp. 71–79, Nov.
        2016, impact factor 2.150.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        31. J. Alonso-Tovar, <em className="text-info "> B. N. Saha</em>, J.
        Romero-Hdz, and D. Ortega, "Bayesian network classifier with efficient
        statistical time-series features for the classification of robot
        execution failures," SSRG International Journal of Computer Science and
        Engineering (SSRG-IJCSE), vol. 3, pp. 80–89, Nov. 2016, impact factor
        2.150.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        32. A. Sauceda, E. Rodriguez, J. Romero, D. Ortega, and{" "}
        <em className="text-info "> B. N. Saha</em>, "Implementation of computer
        vision guided peg-hole insertion task performed by robot through
        labview," MICAI 2016, Part I, Lecture Notes in Artificial Intelligence
        (LNAI) 10061, pp. 437–458, 2017.
      </p>
    </section>
  );

  // Function for Welding Process section
  const renderWeldingProcess = () => (
    <section id="example-5" className="blog_ct intro_title">
      <h1>AUTOMATION AND OPTIMIZATION OF WELDING PROCESS</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        Welding deformation presents significant challenges in metal joining,
        often leading to design constraints, increased rework, elevated quality
        control costs, and higher capital expenditures. Optimizing the welding
        sequence is critical to minimizing deformation and residual stress;
        however, this task is computationally intensive due to its complex
        combinatorial nature. To tackle this, I implemented a suite of
        optimization techniques—including a Modified Lowest Cost Search (MLCS),
        a multi-objective Genetic Algorithm (GA), and a Reinforcement Learn- ing
        (RL) framework—to generate pseudo-optimal welding sequences that
        effectively reduce deformation and residual stress. Notably, our
        research was the first to demonstrate the com- bined use of Low
        Temperature Transform (LTT) and conventional wire for welding sequence
        optimization, resulting in a significant improvement in weldment fatigue
        life. These contributions have been validated through experimental
        studies and documented in the peer-reviewed publications listed below.
      </p>

      <p className="book_content fs-5 text-secondary">
        33. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, J.
        Vallikavungal, and P. del C. Z. Robledo, "OpenAM-SimCCX: An Open-Source
        Framework for Thermo-Mechanical Analysis of Additive Manufacturing with
        CalculiX," Materials. 18(4990): 1 - 40, 2025.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        34. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, N.
        Hofbauer, and P. del C. Z. Robledo, "Os-weldsim: An open-source
        framework for finite element-based welding simulation," The
        International Journal of Advanced Manufacturing Technology. 2025.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        35. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, S.
        Tstutsumia, R. Fincatoa, and G. Toledo, "Incorporating domain knowledge
        into reinforcement learning to expedite welding sequence optimization,"
        in Engineering Applications of Artificial Intelligence, vol. 91, 2020,
        pp. 1–10.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        36. "Statistical validation of weldment deformation through welding
        simulation and 3d optical scanning," in Proceedings of the Welding
        Structure Symposium, 2017, pp. 1–8.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        37. J. Romero-Hdz, S. Tstutsumia, R. Fincatoa, and{" "}
        <em className="text-info "> B. N. Saha</em>, "Influence of welding
        sequence on residual stress and deformation pattern using conventional
        and ltt wires," in Proceedings of the Welding Structure Symposium, 2017,
        pp. 1–8.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        38. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, G.
        Toledo, and I. Lopez, "A reinforcement learning based approach for
        welding sequence optimization," Transactions on Intelligent Welding
        Manufacturing, pp. 33–45, 2017.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        39. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, and G.
        Toledo, "Welding sequence optimization through a modified lowest cost
        search algorithm," Computer Science and Engineering, vol. 6, pp. 25–32,
        2016.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        40. J. Romero-Hdz, S. Aranda, G. Toledo-Ramirez, J. Segura, and{" "}
        <em className="text-info "> B. N. Saha</em>, "Deformation and residual
        stress based multiobjective genetic algorithm for welding sequence
        optimization," Journal of Research in Computing Science, vol. 132, pp.
        155–179, 2017.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        41. J. Romero-Hdz, S. Aranda, G. Toledo, J. Segura, and{" "}
        <em className="text-info "> B. N. Saha</em>, "An elitism based genetic
        algorithm for welding sequence optimization to reduce deformation,"
        Journal of Research in Computing Science, vol. 121, pp. 17–36, 2016.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        42. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, G.
        Toledo-Ramirez, and D. Beltran-Bqz, "Welding sequence optimization using
        artificial intelligence techniques, an overview," SSRG International
        Journal of Computer Science and Engineering (SSRG-IJCSE), vol. 3, pp.
        90–95, Nov. 2017, impact factor 2.150.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        43. J. Romero-Hdz, <em className="text-info "> B. N. Saha</em>, and G.
        Toledo, "Deformation driven fast and approximate shortest path algorithm
        for selecting a pseudo-optimal welding sequence," Global Conference on
        Engineering and Applied Science, vol. GCEAS-487, pp. 439–449, 2016.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        44. J. Romero-Hdz, G. Toledo, and{" "}
        <em className="text-info "> B. N. Saha</em>, "Deformation and residual
        stress based multiobjective genetic algorithm for welding sequence
        optimization," in 2016 Fifteenth Mexican International Conference on
        Artificial Intelligence (MICAI), Oct 2016, pp. 80–91.
      </p>
      <br />
    </section>
  );

  // Function for Predictive Maintenance section
  const renderPredictiveMaintenance = () => (
    <section id="example-6" className="blog_ct intro_title">
      <h1>RELIABILITY AND OPTIMIZATION FOR PREDICTIVE MAINTENANCE</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        Prognostics have gained increasing attention due to the critical need
        for accurate estimation of Remaining Useful Life (RUL) in diverse
        applications. My research focuses on developing machine learning-based
        prognostic models for both electric motors and cancer patients, with the
        goal of improving predictive accuracy and reliability. In parallel, I
        have worked on optimizing design parameters for life testing plans under
        censoring schemes using genetic algorithm-based multi-objective
        optimization. A particular focus has been placed on progressive
        censoring, a complex combinatorial optimization problem. To address its
        computational challenges, I introduced a novel restricted weak integer
        composition- based sample initialization algorithm, which significantly
        accelerates convergence and enhances the robustness of the Genetic
        Algorithm. These advancements contribute to more efficient and reliable
        prognostic modeling and testing strategies. Related publications are
        listed below.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        45. R. Bhattacharya, <em className="text-info "> B. N. Saha</em>, G.
        González-Farías, and N. Balakrishnan, "Multi-criteria based optimum life
        testing plans under hybrid censoring," Test, pp. 1–24, 2019.
      </p>
      <br />
    </section>
  );

  // Function for Cognitive Science section
  const renderCognitiveScience = () => (
    <section id="example-7" className="blog_ct intro_title">
      <h1>COMPUTATIONAL COGNITIVE SCIENCE</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        One of my research areas focuses on developing mathematical models and
        computational sim- ulations to deepen our understanding of human
        perception, cognition, learning, and behavioral psychology. As part of
        this work, I have designed novel statistical models and introduced a new
        statistical visualization technique - the pie-bubble chart - to analyze
        complex perceptual data. My research addresses key topics such as color
        perception, the influence of digital diversion in mitigating
        curriculum-related stress, and the perceptual characteristics of
        computer-generated biological imagery that trigger horripilation
        (goosebumps). These interdisciplinary efforts bridge computational
        modeling with psychological theory, offering new insights into human
        responses to digital stimuli. The findings from this work are detailed
        in the publications listed below.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        46. T. P. Mukhopadhyay, <em className="text-info "> B. N. Saha</em>, N.
        Gurieva, and R. T. Lopez, "Rosa mexicano: the social optics of a color
        neologism," Journal of the International Colour Association, pp. 1–16,
        2017.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        47. T. P. Mukhopadhyay, M. Siprut, and{" "}
        <em className="text-info "> B. N. Saha</em>, "Digital diversions in
        education: Interactive multimedia for adolescent motivation in
        unilateral classroom scenarios," International Journal of Innovation,
        Creativity and Change, vol. 3, pp. 60–74, 2017.
      </p>
      <br />
    </section>
  );

  // Function for NLP section
  const renderNLP = () => (
    <section id="example-8" className="blog_ct intro_title">
      <h1>NATURAL LANGUAGE PROCESSING IN RESOURCE-SCARCE LANGUAGES</h1>
      <br />
      <p className="pub_content text-secondary text-left fs-5 lh-base">
        My research in Natural Language Processing (NLP) focuses on developing
        innovative solutions for key challenges such as anaphora resolution,
        sentiment analysis, fake news detection, hate speech and offensive
        content identification, and text summarization, particularly for
        resource- scarce languages. These languages present unique challenges
        due to limited annotated datasets and significant linguistic diversity.
        To address these challenges, we employ strategies such as transfer
        learning, multilingual models, and community-driven data collection. For
        example, our work on anaphora resolution in Bengali integrates
        linguistic domain knowledge to enhance traditional machine learning
        models like Support Vector Machines, Decision Trees, and AdaBoost. We
        have also developed deep learning frameworks—including LSTM-based
        architectures—for sentiment analysis and hate speech detection in
        low-resource Indo-European languages using social media data. These
        efforts are aimed at improving the generalization capabilities of NLP
        models across diverse linguistic contexts and contributing to the
        preservation and digital representation of underrepresented languages.
        Our research bridges computational methods with linguistic in- sights to
        support the development of inclusive and effective NLP tools.
        Publications in this area are listed below.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        48. A. Bahuguna, D. Yadav, A. Senapati, and{" "}
        <em className="text-info "> B. N. Saha</em>, "A unified deep neuro-fuzzy
        approach for covid-19 twitter sentiment classification," in 8th
        International Symposium on Language & Knowledge Engineering
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        49. <em className="text-info "> B. N. Saha</em>, A. Senapati, and U.
        Garain, "A deep learning framework for anaphora resolution from social
        media text," in 3rd International Conference on Machine Intelligence and
        Signal Processing (MISP), 2021.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        50. A. A. Ayandeyi and <em className="text-info "> B. N. Saha</em>,
        "Twitter data sentiment analysis to understand effect of covid-19 on
        mental health," in Intelligent Computing and Technologies Conference
        (ICTCON), 2021, pp. 174–179.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        51. <em className="text-info "> B. N. Saha</em> and A. Senapati, "Hate
        speech and offensive content identification: Lstm based deep learning
        approach @ hasoc 2020," in Working Notes of FIRE 2020 - Forum for
        Information Retrieval Evaluation, 2020, pp. 290–297.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        52. Long short term memory (lstm) based deep learning for sentiment
        analysis of english and spanish data," in International Conference on
        Computational Performance Evaluation (ComPE), 2020, pp. 1–5.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        53. <em className="text-info "> B. N. Saha</em>, A. Senapati, and A.
        Mahajan, "Lstm based deep rnn architecture for election sentiment
        analysis from bengali newspaper," in International Conference on
        Computational Performance Evaluation (ComPE), 2020, pp. 1–6.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        54. A. Senapati, A. Poudyal, P. Adhikary, S. Kaushar, A. Mahajan, and{" "}
        <em className="text-info "> B. N. Saha</em>, "A machine learning
        approach to anaphora resolution in nepali language," in International
        Conference on Computational Performance Evaluation (ComPE), 2020, pp.
        1–6.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        55. <em className="text-info "> B. N. Saha</em> and A. Senapati, "Lstm
        based deep rnn architecture for hate speech and offensive content
        (hasoc) identification in indo – european languages," in The 11th
        meeting of Forum for Information Retrieval Evaluation (FIRE), 2019.
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        56. Malhotra Shubham, and <em className="text-info "> B. N. Saha</em>.
        (2021). COVID-19Chatbot: A natural language processing and artificial
        Intelligence powered intelligent virtual assistant to create awareness
        during pandemic. Undergraduate Research in Science Conference of Alberta
        (URSCA), Edmonton, Alberta, Canada
      </p>
      <br />

      <p className="book_content fs-5 text-secondary">
        57. Avalloni de Morais Rene, and
        <em className="text-info "> B. N. Saha</em>. (2021). Customer Sentiment
        Analysis from Audio Data Using Deep Learning. Student Research Forum,
        Concordia University of Edmonton (CUE), Edmonton, Alberta, Canada
      </p>
      <br />
    </section>
  );

  // Function for Others section
  const renderOthers = () => (
    <section id="example-9" className="blog_ct intro_title">
      <h1>OTHER PUBLICATIONS</h1>
      <br />
      <section id="example-sub-A-collapsible">
        <h5 className="book_title">SIGNALS PROCESSING</h5>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          We propose a deep learning based end-to-end architecture for speech
          recognition.
        </p>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          This research proposes a deep learning-based end-to-end architecture
          for speech recognition, designed to improve both accuracy and
          efficiency across diverse linguistic contexts. The ar- chitecture
          integrates multiple layers of neural networks to directly process raw
          audio input, eliminating the need for manual feature extraction and
          simplifying the recognition pipeline. By leveraging advanced deep
          learning models, the system effectively learns complex speech
          patterns, enhancing performance in noisy environments and enabling
          robust recognition across various speech types.
        </p>
        <br />
        <p className="book_content fs-5 text-secondary">
          58. R. A. de Morais and
          <em className="text-info"> B. N. Saha</em>, "End-to-end speech
          recognition using recurrent neural network (rnn)," in Intelligent
          Computing and Technologies Conference (ICTCON), 2021, pp. 152–158. The
          evolution of snake toward automation for multiple blob-object
          segmentation. LAP Lambert Academic Publishing, 2012
        </p>
        <br />
      </section>

      <section id="example-sub-B-collapsible">
        <h5 className="book_title">NETWORK SECURITY</h5>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          This research demonstrates how machine learning can predict
          distributed denial of service attack and save financial institutions
          from cyber attacks.
        </p>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          Distributed Denial-of-Service (DDoS) attacks pose significant threats
          to financial institutions by overwhelming networks and disrupting
          services. To counter these threats, machine learn- ing (ML) offers
          predictive capabilities to identify and mitigate potential DDoS
          attacks. In the study "Using Machine Learning to Predict Distributed
          Denial-of-Service (DDoS) Attack" by Qozeem Adeniyi Adeshina and Baidya
          Nath Saha, published in the Proceedings of the Intelligent Computing
          and Technologies Conference (ICTCon2021), the authors explore the
          development of ML classifiers to detect DDoS attacks before they
          occur. Using the KDD-99 dataset, a comprehensive network traffic
          dataset, the researchers trained various ML classifiers to distinguish
          between normal and DDoS traffic across protocols like ICMP, TCP, and
          UDP. The study employed seven distinct feature selection techniques
          and applied them to ten different ML classifiers to enhance attack
          detection accuracy. The find- ings demonstrated that certain
          classifiers could predict DDoS attacks effectively within short
          timeframes, providing valuable insights for preemptive security
          measures. Integrating these machine learning models into the
          cybersecurity infrastructure of financial institutions can
          significantly enhance defenses against DDoS attacks. By accurately
          predict- ing and identifying malicious traffic patterns, these models
          enable timely responses, ensuring service continuity and the
          protection of financial assets. This research highlights the potential
          of machine learning in strengthening cybersecurity measures within the
          financial sector.
        </p>
        <br />

        <p className="book_content fs-5 text-secondary">
          59. M. D. M. Islam, C. S. P.
          <em className="text-info"> B. N. Saha</em>, S. Parvin, W. M. Abdullah,
          and K. F. Hasan, "A privacy-preserving trustworthy behavioral
          authentication system," ACM Transactions on Privacy and Security
          (TOPS) (Submitted), 2025.
        </p>
        <br />

        <p className="book_content fs-5 text-secondary">
          60. Q. A. Adeshina and
          <em className="text-info"> B. N. Saha</em>, "Using machine learning to
          predict distributed denial-ofservice (ddos) attack," in Intelligent
          Computing and Technologies Conference (ICTCON), 2021, pp. 159–169.
        </p>
        <br />

        <p className="book_content fs-5 text-secondary">
          61. Chaudhary Jainth, and
          <em className="text-info"> B. N. Saha</em>. (2021). SAFE AI: Privacy
          preserving machine learning algorithms for trust sensitive
          environments. Undergraduate Research in Science Conference of Alberta
          (URSCA), Edmonton, Alberta, Canada.
        </p>
        <br />

        <p className="book_content fs-5 text-secondary">
          62. Adeshina Qozeem Adeniyi, and
          <em className="text-info"> B. N. Saha</em>. Nath. (2021). Evaluation
          and Development of Machine Learning Based Algorithms for Predicting
          Distributed Denial of Service Attack (DDoS). Student Research Forum,
          Concordia University of Edmonton (CUE), Edmonton, Alberta, Canada
        </p>
        <br />
      </section>

      <section id="example-sub-C-collapsible">
        <h5 className="book_title">INTERNET OF THINGS</h5>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          This research introduces a machine learning-driven Internet of Things
          (IoT) smart healthcare kit designed to enhance patient care through
          continuous online monitoring of vital health indi- cators. The study
          also explores diagnostic applications, utilizing K-Nearest Neighbor
          (K-NN) and Random Forest classifiers for heart disease prediction
          based on pathology data. Addi- tionally, the VGG-19 deep learning
          architecture is employed for lung disease detection from X-ray images.
          These machine learning models support physicians in accurate disease
          diagnosis, ultimately improving patient outcomes. This research
          highlights how integrating machine learning with IoT technologies can
          revolu- tionize healthcare delivery by enabling remote monitoring and
          early disease detection.
        </p>
        <br />
        <p className="book_content fs-5 text-secondary">
          63. L. Narayanagari and
          <em className="text-info"> B. N. Saha</em>, "Machine learning driven
          iot based smart health care kit," in Intelligent Computing and
          Technologies Conference (ICTCON), 2021, pp. 180– 185.
        </p>
        <br />
      </section>

      <section id="example-sub-D-collapsible">
        <h5 className="book_title">SOFTWARE ENGINEERING</h5>
        <p className="pub_content text-secondary text-left fs-5 lh-base">
          This research proposes a machine learning-based approach for software
          test case selection, designed to optimize regression testing with
          limited resources. By leveraging machine learning models, the study
          improves the efficiency of test case selection, enabling software
          testing teams to prioritize the most critical cases. The approach
          involves data preprocessing, including converting categorical data
          into numerical values, and applyingnatural language processing (NLP)
          techniques to extract relevant features from test case titles.
          Experimental results show that this machine learning-driven method
          significantly reduces man- ual efforts by automating test case
          selection, leading to substantial time and resource savings while
          enhancing overall testing efficiency.
        </p>
        <p className="book_content fs-5 text-secondary">
          64.S. Parvin, W. M. Abdullah, and K. F. Hasan, "A privacy-preserving
          trustworthy behavioral authentication system," ACM Transactions on
          Privacy and Security (TOPS) (Submitted), 2025.
        </p>
        <br />
        <p className="book_content fs-5 text-secondary">
          65. V. Cheruiyot and
          <em className="text-info"> B. N. Saha</em>, "A machine learning based
          approach for software test case selection," in Intelligent Computing
          and Technologies Conference (ICTCON), 2021, pp. 186–189.
        </p>
        <br />
        <p className="book_content fs-5 text-secondary">
          66. Wali Mohammad Abdullah, Md. Morshedul Islam, Devraj Parmar, Happy
          Hasmukhbhai Patel, Sindhuja Prabhakaran,{" "}
          <em className="text-info"> B. N. Saha</em>. (2025). RAILS:
          Retrieval-Augmented Intelligence for Learning Software Development.
          Proceedings of IEEE High Performance Extreme Computing Virtual
          Conference. IEEE High Performance Extreme Computing Virtual
          Conference, (1-6)
        </p>
        <br />
      </section>
    </section>
  );

  // Function for Long Term Goals section
  const renderLongTermGoals = () => (
    <section id="example-10">
      <h2>LONG TERM RESEARCH GOALS</h2>
      <br />
      <p className="pub_content text-justify fs-5 lh-base">
        In the long term, my research interests are centered on solving
        application-driven, large-scale big data analysis challenges. I believe
        that while engineering solutions are essential, they are insufficient on
        their own to address such complex problems in real-world applications.
        Theoretical advancements are crucial for developing optimal solutions to
        these challenges. Citations of my publications are available via the
        following bibliometrics link: Google Scholar Citations
        <br />
        <br />
        Bibliometrics URL:{" "}
        <em className="text-info">
          https://scholar.google.com/citations?user=HkY4OJgAAAAJ&hl=en
        </em>{" "}
      </p>
      <br />
    </section>
  );

  // Function to render all sections (original full page)
  const renderAllSections = () => (
    <>
      <h1> RESEARCH HIGHLIGHTS</h1>
      <br />
      <br />

      <p className="pub_content text-secondary text-left fs-5 lh-base">
        My research interests lie on the intersection of advancement and
        application of the machine learning and computer vision-based
        algorithms. My research interest revolves around a broad range of areas
        such as, Artificial Intelligence, Machine Learning, Computer Vision,
        Robotics, Computational Cognitive Science, Reliability, Signal
        Processing, and Software Engineering. To date, I published fifty six
        (56) research papers in the peer-reviewed journals and conferences. My
        research articles are published in the reputed journals like Pattern
        Recognition (Impact Factor (I. F.) 7.740), Emerging Applications of
        Artificial Intelligence (Impact Factor (I. F.) 4.201), IEEE Signal
        Processing Letters (I. F. 3.109), American Journal of Neuroradiology (I.
        F. 3.653), and premier conferences like MICCAI (Acceptance Rate (A. R.)
        ~32%, rank 1 conference in computer science) , ECML (A. R. ~30%) , ACCV
        (A. R. ~29%), and ICIP (A. R. ~45%). I received 558 google scholar
        citations and 11572 research gate reads to date; My publications are
        categorized into the following major areas.
      </p>
      <hr className="divider" />
      <div
        data-mdb-spy="scroll"
        data-mdb-target="#scrollspy1"
        data-mdb-offset="0"
        className="scrollspy-example"
      >
        {renderBooks()}
        <hr className="divider" />
        {renderMachineLearning()}
        {renderComputerVision()}
        <hr className="divider" />
        {renderRobots()}
        {renderWeldingProcess()}
        {renderPredictiveMaintenance()}
        {renderCognitiveScience()}
        {renderNLP()}
        {renderOthers()}
      </div>
      <hr className="divider" />
      {renderLongTermGoals()}
      <br />
      <br />
      <br />
    </>
  );

  // Render content based on route
  const renderContent = () => {
    switch (routeName) {
      case "/books":
        return renderBooks();
      case "/machine-learning":
        return renderMachineLearning();
      case "/computer-vision":
        return renderComputerVision();
      case "/robots":
        return renderRobots();
      case "/welding-process":
        return renderWeldingProcess();
      case "/predictive-maintenance":
        return renderPredictiveMaintenance();
      case "/cognitive-science":
        return renderCognitiveScience();
      case "/nlp":
        return renderNLP();
      case "/publications-others":
        return renderOthers();
      case "/long-term-goals":
        return renderLongTermGoals();
      default:
        return renderAllSections();
    }
  };

  return (
    <>
      <WhiteNavBar />
      <div className="blog_container">
        <div className="row">
          {/* <div className="col-md-4 sidenav_bar  ">
          <div id="scrollspy1" className="  section_list">
            <br />
            <br />

            <ul className="nav flex-column nav-pills menu-sidebar section_menu">
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-1"
                >
                  Books
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-2"
                >
                  Machine Learning
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-3"
                >
                  Computer Vision
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-4"
                >
                  Robots
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-5"
                >
                  Welding Process
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-6"
                >
                  Predictive Maintenance
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-7"
                >
                  Cognitive Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-8"
                >
                  Natural Language Processing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-9"
                >
                  Others
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-dark p-3 space_btw link-dark"
                  href="#example-10"
                >
                  Long Term Goals
                </a>
              </li>
            </ul>
          </div>
        </div> */}
          <div className="col-md-8 blog_content">
            <br />
            <br />
            <br />
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Publications;
