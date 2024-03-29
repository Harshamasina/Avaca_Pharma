import Table from 'react-bootstrap/Table';
import { BsBuilding } from "react-icons/bs";
import { Helmet } from 'react-helmet';

function Infra(){
    return(
        <>
            <Helmet>
                <title>Infrastructure | AvacaPharma</title>
                <meta name="description" content="Lab Equipments and Infrastructure in AvacaPharma Laboratories" />
                <meta name="keywords" content="Infrastructure of AvacaPharma, Formulation R&D, Analytical R&D, Instrument in AvacaPharma" />
            </Helmet>
            <div className='landingpage'>
            <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Maufactuing.mp4" 
                autoPlay 
                muted 
                loop 
                className='video-bg' 
                type="video/mp4"
                poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+infra.png"
            />
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>Avaca Pharma is a trusted R&D and manufacturing partner to the global life sciences industry. From concept to commercial, we transform your ideas into solutions for better health</h1>
                    </div>
                </div>
            </div>
            <div>
                <BsBuilding className="PageIcon"></BsBuilding>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">INFRASTRUCTURE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">INFRASTRUCTURE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">INFRASTRUCTURE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">INFRASTRUCTURE</span>
                    </span>
                </h1>
            </div>
            <div>
                <div className='InfraTableContainer'>
                    <h2>Formulation R&D Infrastructure</h2>
                    <Table striped hover className='InfaTable shadow-lg'>
                        <thead>
                            <tr>
                                <th>SNo</th>
                                <th>Instrument</th>
                                <th>Number</th>
                                <th>Make</th>
                                <th>Model/Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Rapid Mixer Granulator</td>
                                <td>FRD-EQ/001</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Cone mill</td>
                                <td>FRD-EQ/002</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PCOM:50/ 50 kg/hr</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Vibro Sifter</td>
                                <td>FRD-EQ/003</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PVS-12/ 1-25 kg/hr</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Bin Blender</td>
                                <td>FRD-EQ/004</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PBB-10/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Fluid Bed Wurster Granulator</td>
                                <td>FRD-EQ/005</td>
                                <td>ACG Pharma technologies Pvt. Ltd</td>
                                <td>GPCG 1.1/ 4.7 liters for top spray, 2.4 liters for bottom spray</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Table Top Rotary Tablet Press</td>
                                <td>FRD-EQ/006</td>
                                <td>Kambert Machinery co.pvt LTD</td>
                                <td>KMPc-DB-08 / 8 stations</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>Rapid Mixer Granulator</td>
                                <td>FRD-EQ/001</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Ganscoater</td>
                                <td>FRD-EQ/007</td>
                                <td>Gansons Limited</td>
                                <td>GAC-300EXT/2.20kg(Approx.) (or)2.97 liters</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Laboratory Stirrer</td>
                                <td>FRD-IN/002</td>
                                <td>Remi Electrotechnik LTD</td>
                                <td>EMS-8</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>Laboratory Stirrer</td>
                                <td>FRD-IN/003</td>
                                <td>Remi Electrotechnik LTD</td>
                                <td>RQT-124AD</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>Homogenizer</td>
                                <td>FRD-IN/004</td>
                                <td>Remi Electrotechnik LTD</td>
                                <td>RQT- 127/ D</td>
                            </tr>

                            <tr>
                                <td>12</td>
                                <td>Magnetic Stirrer</td>
                                <td>FRD-IN/005</td>
                                <td>Remi Electrotechnik LTD</td>
                                <td>5 MLH PLUS</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>Analytical balance</td>
                                <td>FRD-IN/006</td>
                                <td>Sartorius</td>
                                <td>BSA224S-CW/ 220g</td>
                            </tr>

                            <tr>
                                <td>14</td>
                                <td>Weighing Balance</td>
                                <td>FRD-IN/007</td>
                                <td>Sartorius</td>
                                <td>QUINTIX3102/ 3kg</td>
                            </tr>

                            <tr>
                                <td>15</td>
                                <td>Weighing Balance</td>
                                <td>FRD-IN/008</td>
                                <td>Metsar</td>
                                <td>MGB-6-ED/ 6kg</td>
                            </tr>

                            <tr>
                                <td>16</td>
                                <td>Tap Density Tester</td>
                                <td>FRD-IN/009</td>
                                <td>Lab India Analytical instruments Pvt.Ltd</td>
                                <td>TD 1025</td>
                            </tr>

                            <tr>
                                <td>17</td>
                                <td>Tablet Hardness Tester</td>
                                <td>FRD-IN/010</td>
                                <td>Lab India Analytical instruments Pvt.Ltd</td>
                                <td>TH 1050 M</td>
                            </tr>

                            <tr>
                                <td>18</td>
                                <td>Tablet Disintegration Tester</td>
                                <td>FRD-IN/011</td>
                                <td>Lab India Analytical instruments Pvt.Ltd</td>
                                <td>DT 1000</td>
                            </tr>

                            <tr>
                                <td>19</td>
                                <td>Tablet Friability Tester</td>
                                <td>FRD-IN/012</td>
                                <td>Lab India Analytical instruments Pvt.Ltd</td>
                                <td>FT 1020</td>
                            </tr>

                            <tr>
                                <td>20</td>
                                <td>Moisture Analyzer</td>
                                <td>FRD-IN/013</td>
                                <td>Sartorius</td>
                                <td>MA 35</td>
                            </tr>

                            <tr>
                                <td>21</td>
                                <td>Hot Air Oven</td>
                                <td>FRD-IN/014</td>
                                <td>Remi Electrotechnik LTD</td>
                                <td>RDHO-80/ 80L</td>
                            </tr>

                            <tr>
                                <td>22</td>
                                <td>pH meter</td>
                                <td>FRD-IN/015</td>
                                <td>Vihaan Techno Services</td>
                                <td>P711</td>
                            </tr>

                            <tr>
                                <td>23</td>
                                <td>Analytical balance</td>
                                <td>FRD-IN/016</td>
                                <td>Sartorius</td>
                                <td>BSA224S-CW/ 220g</td>
                            </tr>

                            <tr>
                                <td>24</td>
                                <td>SS Weight 500g</td>
                                <td>FRD-IN/017</td>
                                <td>Wensar</td>
                                <td>-</td>
                            </tr>

                            <tr>
                                <td>25</td>
                                <td>SS Weight  1kg</td>
                                <td>FRD-IN/018</td>
                                <td>Wensar</td>
                                <td>-</td>
                            </tr>

                            <tr>
                                <td>26</td>
                                <td>SS Weight 2kg</td>
                                <td>FRD-IN/019</td>
                                <td>Wensar</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>27</td>
                                <td>Rapid Mixer Granulator</td>
                                <td>FRD-EQ/001</td>
                                <td>Prism Pharma Machinery</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>28</td>
                                <td>SS Weight 10kg</td>
                                <td>FRD-IN/021</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>

                            <tr>
                                <td>29</td>
                                <td>Leak test apparatus</td>
                                <td>FRD-IN/022</td>
                                <td>Electrolab</td>
                                <td>LT-101 P</td>
                            </tr>

                            <tr>
                                <td>30</td>
                                <td>Vacuum cleaner</td>
                                <td>FRD-IN/023</td>
                                <td>Aquamall water solutions ltd</td>
                                <td>Forbes trend</td>
                            </tr>

                            <tr>
                                <td>31</td>
                                <td>Direct heat sealer</td>
                                <td>FRD-EQ/008</td>
                                <td>A-Z Packers</td>
                                <td>PISF-DH-400mm</td>
                            </tr>

                            <tr>
                                <td>32</td>
                                <td>Induction cap sealer</td>
                                <td>FRD-EQ/009</td>
                                <td>Electronics Devices</td>
                                <td>Sigma pro GMP</td>
                            </tr>

                            <tr>
                                <td>33</td>
                                <td>Laboratory Blistering Machine</td>
                                <td>FRD-EQ/010</td>
                                <td>Mechtek</td>
                                <td>Ezee Blist-P</td>
                            </tr>

                            <tr>
                                <td>34</td>
                                <td>Series Osmometer</td>
                                <td>FRD-IN/024</td>
                                <td>Gonotec</td>
                                <td>Osmomat 030</td>
                            </tr>

                            <tr>
                                <td>35</td>
                                <td>Vortex Mixer</td>
                                <td>FRD-IN/025</td>
                                <td>Velp</td>
                                <td>PZX3</td>
                            </tr>

                            <tr>
                                <td>36</td>
                                <td>Multi position Digital Stirrer</td>
                                <td>FRD-IN/026</td>
                                <td>Velp</td>
                                <td>F203A0179</td>
                            </tr>

                            <tr>
                                <td>37</td>
                                <td>pH Meter</td>
                                <td>FRD-IN/027</td>
                                <td>Horiba</td>
                                <td>ph - 100</td>
                            </tr>

                            <tr>
                                <td>38</td>
                                <td>Viscometer</td>
                                <td>FRD-IN/028</td>
                                <td>Brookfield</td>
                                <td>LVDV-E</td>
                            </tr>

                            <tr>
                                <td>39</td>
                                <td>Air Jet mill</td>
                                <td>FRD-EQ/011</td>
                                <td>Promas Engineers Pvt. Ltd</td>
                                <td>Jet Mill-02” with FLP operating panel</td>
                            </tr>

                            <tr>
                                <td>40</td>
                                <td>Orbital shaker</td>
                                <td>FRD-IN/029</td>
                                <td>Dlab</td>
                                <td>SK-O330-Pro (7.5 Kg)</td>
                            </tr>

                            <tr>
                                <td>41</td>
                                <td>Levo Me Motorized Pipette Filler</td>
                                <td>FRD-IN/030</td>
                                <td>Dlab Levo Me</td>
                                <td>-</td>
                            </tr>

                            <tr>
                                <td>42</td>
                                <td>Hot plate magnetic stirrer with sensor</td>
                                <td>FRD-IN/031</td>
                                <td>IKA</td>
                                <td>RCT Basic & ETSDS</td>
                            </tr>

                            <tr>
                                <td>43</td>
                                <td>Midi Plus Electronic Pipetting controller</td>
                                <td>FRD-IN/032</td>
                                <td>Sartorius</td>
                                <td>MIDI Plus controller</td>
                            </tr>

                            <tr>
                                <td>44</td>
                                <td>T25 Homogenizer</td>
                                <td>FRD-IN/033</td>
                                <td>IKA</td>
                                <td>T 25 Digital</td>
                            </tr>

                            <tr>
                                <td>45</td>
                                <td>Vacuum Pump</td>
                                <td>FRD-IN/034</td>
                                <td>Pall Lifesciences</td>
                                <td>DOA-P730-BN</td>
                            </tr>

                            <tr>
                                <td>46</td>
                                <td>Autoclave</td>
                                <td>FRD-EQ/012</td>
                                <td>Equitron</td>
                                <td>Autoclave SLEFA</td>
                            </tr>

                            <tr>
                                <td>47</td>
                                <td>Hot air Oven</td>
                                <td>FRD-EQ/013</td>
                                <td>Equitron</td>
                                <td>7051-091</td>
                            </tr>

                            <tr>
                                <td>48</td>
                                <td>Micro pipette</td>
                                <td>FRD-EQ/001</td>
                                <td>Prime</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>49</td>
                                <td>pH Meter</td>
                                <td>FRD-IN/036</td>
                                <td>Eutech</td>
                                <td>pH700</td>
                            </tr>

                            <tr>
                                <td>50</td>
                                <td>Ultra Sonicator</td>
                                <td>FRD-IN/037</td>
                                <td>Life Care, equipment's Pvt. Ltd.</td>
                                <td>NA</td>
                            </tr>

                            <tr>
                                <td>51</td>
                                <td>Density meter</td>
                                <td>FRD-IN/038</td>
                                <td>Mettler Toledo</td>
                                <td>Hand Held Densito</td>
                            </tr>

                            <tr>
                                <td>52</td>
                                <td>Analytical Balance</td>
                                <td>FRD-IN/039</td>
                                <td>Mettler Toledo</td>
                                <td>MS205DU</td>
                            </tr>

                            <tr>
                                <td>53</td>
                                <td>DO meter</td>
                                <td>FRD-IN/040</td>
                                <td>Hanna</td>
                                <td>HI2004</td>
                            </tr>

                            <tr>
                                <td>54</td>
                                <td>Precession Dispenser</td>
                                <td>FRD-IN/041</td>
                                <td>Brand</td>
                                <td>Handy Step Electronic</td>
                            </tr>

                            <tr>
                                <td>55</td>
                                <td>Multi Point Magnetic Stirrer</td>
                                <td>FRD-IN/042</td>
                                <td>IKA</td>
                                <td>RT 5</td>
                            </tr>

                            <tr>
                                <td>56</td>
                                <td>IR thermo meter</td>
                                <td>FRD-IN/043</td>
                                <td>Work Zone</td>
                                <td>MT-5A</td>
                            </tr>

                            <tr>
                                <td>57</td>
                                <td>Magnetic Stirrer with hot plate</td>
                                <td>FRD-IN/044</td>
                                <td>Rem</td>
                                <td>1-MLH</td>
                            </tr>

                            <tr>
                                <td>58</td>
                                <td>Magnetic Stirrer with hot plate</td>
                                <td>FRD-IN/045</td>
                                <td>Rem</td>
                                <td>1-MLH</td>
                            </tr>

                            <tr>
                                <td>59</td>
                                <td>Magnetic Stirrer with hot plate</td>
                                <td>FRD-IN/046</td>
                                <td>Rem</td>
                                <td>1-MLH</td>
                            </tr>

                            <tr>
                                <td>60</td>
                                <td>Manual Capsule filling Machine</td>
                                <td>FRD-EQ/014</td>
                                <td>Anchor mark Pvt. Ltd</td>
                                <td>MCF-300</td>
                            </tr>

                            <tr>
                                <td>61</td>
                                <td>Biosafety cabinet</td>
                                <td>FRD-EQ/015</td>
                                <td>Pharmatek</td>
                                <td>Class-II/ A2</td>
                            </tr>

                            <tr>
                                <td>62</td>
                                <td>LUX meter</td>
                                <td>FRD-IN/047</td>
                                <td>HTC</td>
                                <td>LX-101A</td>
                            </tr>

                            <tr>
                                <td>63</td>
                                <td>Magnetic Stirrer with hot plate</td>
                                <td>FRD-IN/046</td>
                                <td>Pharmatek</td>
                                <td>Class-II/ A2</td>
                            </tr>

                            <tr>
                                <td>64</td>
                                <td>Pressure vessel 5Liter</td>
                                <td>FRD-EQ/016</td>
                                <td>Chempro & Pharmach Equipments</td>
                                <td>5 Liter</td>
                            </tr>

                            <tr>
                                <td>65</td>
                                <td>Stand mixer planetary drive </td>
                                <td>FRD-EQ/017</td>
                                <td>Galactic international</td>
                                <td>SM01510BLK</td>
                            </tr>

                            <tr>
                                <td>66</td>
                                <td>Analytical Balance</td>
                                <td>FRD-IN/049</td>
                                <td>Sartorius</td>
                                <td>BSA224S-CW/ 220g</td>
                            </tr>

                            <tr>
                                <td>67</td>
                                <td>PH METER</td>
                                <td>FRD-IN/050</td>
                                <td>Mettler Toledo</td>
                                <td>S210</td>
                            </tr>

                            <tr>
                                <td>68</td>
                                <td>Dissolution Test Apparatus (DS 8000)</td>
                                <td>FRD-IN/051</td>
                                <td>Lab India, analytical instruments pvt.Ltd.</td>
                                <td>DS 8000</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='InfraTableContainer'>
                    <h2>Analytical R&D Infrastructure</h2>
                    <Table striped hover className='InfaTable shadow-lg'>
                        <thead>
                            <tr>
                                <th>SNo</th>
                                <th>Instrument</th>
                                <th>Number</th>
                                <th>Make</th>
                                <th>Model/Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Analytical Balance</td>
                                <td>ARD-IN/001</td>
                                <td>Sartorius</td>
                                <td>Secura 225D-10IN</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Dry Hot Air Oven</td>
                                <td>ARD-IN/002</td>
                                <td>Remi</td>
                                <td>RDHO-80</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Centrifuge</td>
                                <td>ARD-IN/003</td>
                                <td>Remi</td>
                                <td>R-8C</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>Refrigerator</td>
                                <td>ARD-IN/004</td>
                                <td>Remi</td>
                                <td>RLR-300</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Vortex mixer</td>
                                <td>ARD-IN/005</td>
                                <td>Remi</td>
                                <td>CM-101 PLUS</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td>Vacuum pump</td>
                                <td>ARD-IN/006</td>
                                <td>PCI Analytics Pvt.Ltd</td>
                                <td>PCI-15</td>
                            </tr>

                            <tr>
                                <td>7</td>
                                <td>pH meter</td>
                                <td>ARD-IN/007</td>
                                <td>Mettler Toledo GmbH, Switzerland</td>
                                <td>PRMG-12/ 2.5,6,12</td>
                            </tr>

                            <tr>
                                <td>8</td>
                                <td>Conductivity meter</td>
                                <td>ARD-IN/008</td>
                                <td>Mettler Toledo AG Analytical</td>
                                <td>FP30-standard</td>
                            </tr>

                            <tr>
                                <td>9</td>
                                <td>Muffle furnace</td>
                                <td>ARD-IN/010</td>
                                <td>Bio- Technics India</td>
                                <td>HSN-code-85141000</td>
                            </tr>

                            <tr>
                                <td>10</td>
                                <td>Weighing Box E2</td>
                                <td>ARD-IN/012</td>
                                <td>WENSAR, ( north lab India) pvt. ltd</td>
                                <td>E2</td>
                            </tr>

                            <tr>
                                <td>11</td>
                                <td>Desiccator</td>
                                <td>ARD-IN/013</td>
                                <td>Poly Lab</td>
                                <td>NA</td>
                            </tr>

                            <tr>
                                <td>12</td>
                                <td>FTIR Spectrophotometer</td>
                                <td>ARD-IN/014</td>
                                <td>Perkin Elmer</td>
                                <td>2 FTIR</td>
                            </tr>

                            <tr>
                                <td>13</td>
                                <td>UV- Visible Spectrophotometer</td>
                                <td>ARD-IN/015</td>
                                <td>Perkin Elmer</td>
                                <td>LAMBDA 365 UV</td>
                            </tr>

                            <tr>
                                <td>14</td>
                                <td>Magnetic Stirrer with Hot Plate</td>
                                <td>ARD-IN/016</td>
                                <td>Remi, Eleectro technic, Ltd.</td>
                                <td>10MLH Plus</td>
                            </tr>

                            <tr>
                                <td>15</td>
                                <td>Dissolution Test Apparatus (DS 8000)</td>
                                <td>ARD-IN/017</td>
                                <td>Lab India, analytical instruments pvt.Ltd.</td>
                                <td>DS 8000</td>
                            </tr>

                            <tr>
                                <td>16</td>
                                <td>Dissolution Test Apparatus (DS 8000 +)</td>
                                <td>ARD-IN/018</td>
                                <td>Lab India, analytical instruments pvt.Ltd.</td>
                                <td>DS 8000+</td>
                            </tr>

                            <tr>
                                <td>17</td>
                                <td>High Performance Liquid Chromatography With PDA</td>
                                <td>ARD-IN/019</td>
                                <td>Waters Corp USA</td>
                                <td>e2695</td>
                            </tr>

                            <tr>
                                <td>18</td>
                                <td>High Performance Liquid Chromatography With UV</td>
                                <td>ARD-IN/020</td>
                                <td>Waters Corp USA</td>
                                <td>e2695</td>
                            </tr>

                            <tr>
                                <td>19</td>
                                <td>High Performance Liquid Chromatography With UV</td>
                                <td>ARD-IN/021</td>
                                <td>Water Corp USA</td>
                                <td>e2695</td>
                            </tr>

                            <tr>
                                <td>20</td>
                                <td>UV Cabinet</td>
                                <td>ARD-IN/022</td>
                                <td>Arrow</td>
                                <td>NA</td>
                            </tr>

                            <tr>
                                <td>21</td>
                                <td>Digital Water Bath</td>
                                <td>ARD-IN/023</td>
                                <td>Vihan Techno Services</td>
                                <td>SSWB-26A</td>
                            </tr>

                            <tr>
                                <td>22</td>
                                <td>Vacuum oven</td>
                                <td>ARD-IN/024</td>
                                <td>Vihan techno services</td>
                                <td>HIPL-028A</td>
                            </tr>

                            <tr>
                                <td>23</td>
                                <td>Elix water system</td>
                                <td>ARD-IN/025</td>
                                <td>Merck Millipore</td>
                                <td>Reference 10</td>
                            </tr>

                            <tr>
                                <td>24</td>
                                <td>Milli - Q water system</td>
                                <td>ARD-IN/026</td>
                                <td>Merck Millipore</td>
                                <td>Reference A+</td>
                            </tr>

                            <tr>
                                <td>25</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/027</td>
                                <td>Newtronic</td>
                                <td>NLHC34SI</td>
                            </tr>

                            <tr>
                                <td>26</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/028</td>
                                <td>Newtronic</td>
                                <td>NLHC34SI</td>
                            </tr>

                            <tr>
                                <td>27</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/029</td>
                                <td>Newtronic</td>
                                <td>NLHC34SI</td>
                            </tr>

                            <tr>
                                <td>28</td>
                                <td>SS Weight 10kg</td>
                                <td>ARD-IN/030</td>
                                <td>Newtronic</td>
                                <td>NLHC34SI</td>
                            </tr>

                            <tr>
                                <td>29</td>
                                <td>Micro Balance</td>
                                <td>ARD-IN/031</td>
                                <td>Mettler Toledo</td>
                                <td>XPR2</td>
                            </tr>

                            <tr>
                                <td>30</td>
                                <td>KF Titrando</td>
                                <td>ARD-IN/032</td>
                                <td>Metrohm</td>
                                <td>890 Titranado</td>
                            </tr>

                            <tr>
                                <td>31</td>
                                <td>Digital Thermometer</td>
                                <td>ARD-IN/033</td>
                                <td>Extech</td>
                                <td>TM100</td>
                            </tr>

                            <tr>
                                <td>32</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/034</td>
                                <td>Newtronic</td>
                                <td>NLCC21SI</td>
                            </tr>

                            <tr>
                                <td>33</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/035</td>
                                <td>Newtronic</td>
                                <td>NLCC21SI</td>
                            </tr>

                            <tr>
                                <td>34</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/036</td>
                                <td>Newtronic</td>
                                <td>NLCC21SI</td>
                            </tr>

                            <tr>
                                <td>35</td>
                                <td>Humidity Chambers</td>
                                <td>ARD-IN/037</td>
                                <td>Newtronic</td>
                                <td>NLCC21SI</td>
                            </tr>

                            <tr>
                                <td>36</td>
                                <td>High Performance Liquid Chromatography With UV/Visible</td>
                                <td>ARD-IN/038</td>
                                <td>Waters</td>
                                <td>ALLOLHTRB</td>
                            </tr>

                            <tr>
                                <td>37</td>
                                <td>High Performance Liquid Chromatography With PDA</td>
                                <td>ARD-IN/039</td>
                                <td>Waters</td>
                                <td>ALLOLHTRB</td>
                            </tr>

                            <tr>
                                <td>38</td>
                                <td>Ultra Sonicator</td>
                                <td>ARD-IN/040</td>
                                <td>Smart Labtech</td>
                                <td>Smart Sonic-D27</td>
                            </tr>

                            <tr>
                                <td>39</td>
                                <td>pH Meter</td>
                                <td>ARD-IN/041</td>
                                <td>Eutech</td>
                                <td>pH 700</td>
                            </tr>

                            <tr>
                                <td>40</td>
                                <td>Dissolution Test Apparatus (DS 14000 +)</td>
                                <td>ARD-IN/042</td>
                                <td>Lab India, analytical instruments pvt.Ltd.</td>
                                <td>DS 14000+</td>
                            </tr>

                            <tr>
                                <td>41</td>
                                <td>pH Meter</td>
                                <td>ARD-IN/043</td>
                                <td>Polmon</td>
                                <td>LP-139SAS</td>
                            </tr>

                            <tr>
                                <td>42</td>
                                <td>Diffusion cell apparatus</td>
                                <td>ARD-IN/044</td>
                                <td>Electrolab</td>
                                <td>EDC-7</td>
                            </tr>

                            <tr>
                                <td>43</td>
                                <td>Vortex Mixer</td>
                                <td>ARD-IN/045</td>
                                <td>Neuation Technologies</td>
                                <td>iSwix-VT</td>
                            </tr>

                            <tr>
                                <td>44</td>
                                <td>Vortex Mixer</td>
                                <td>ARD-IN/046</td>
                                <td>Neuation Technologies</td>
                                <td>iSwix-VT</td>
                            </tr>
                            <tr>
                                <td>45</td>
                                <td>Analytical Balance</td>
                                <td>ARD-IN/047</td>
                                <td>Shimadzu</td>
                                <td>AUW220D</td>
                            </tr>
                            
                            <tr>
                                <td>46</td>
                                <td>Orbital shaker</td>
                                <td>ARD-IN/048</td>
                                <td>JP Selecta</td>
                                <td>ROTATERM (3000435)</td>
                            </tr>

                            <tr>
                                <td>47</td>
                                <td>Semi-Micro Balance</td>
                                <td>ARD-IN/049</td>
                                <td>Mettler Toledo</td>
                                <td>MS205DU</td>
                            </tr>

                            <tr>
                                <td>48</td>
                                <td>Ultrasonic bath with chiller</td>
                                <td>ARD-IN/050</td>
                                <td>PCI Analytics Pvt. Ltd.</td>
                                <td>USB 50L</td>
                            </tr>

                            <tr>
                                <td>49</td>
                                <td>High Performance Liquid Chromatography With UV/Visible</td>
                                <td>ARD-IN/051</td>
                                <td>Shimadzu</td>
                                <td>i-Series LC-2050C</td>
                            </tr>

                            <tr>
                                <td>50</td>
                                <td>High Performance Liquid Chromatography With PDA</td>
                                <td>ARD-IN/052</td>
                                <td>Shimadzu</td>
                                <td>i-Series LC-2050C 3D</td>
                            </tr>

                            <tr>
                                <td>51</td>
                                <td>Vaccum pump</td>
                                <td>ARD-IN/053</td>
                                <td>PCI Analytic Pvt. Ltd.</td>
                                <td>PCI-75-S</td>
                            </tr>

                            <tr>
                                <td>52</td>
                                <td>Column Washing Single Piston Pump</td>
                                <td>ARD-IN/054</td>
                                <td>Peerless</td>
                                <td>WP-2000</td>
                            </tr>

                            <tr>
                                <td>53</td>
                                <td>Photo stability Chamber</td>
                                <td>ARD-IN/055</td>
                                <td>Newtronic</td>
                                <td>NLPS4SI</td>
                            </tr>

                            <tr>
                                <td>54</td>
                                <td>Vortex Mixer</td>
                                <td>ARD-IN/056</td>
                                <td>Lutron</td>
                                <td>LX-102</td>
                            </tr>

                            <tr>
                                <td>55</td>
                                <td>UV Meter</td>
                                <td>ARD-IN/057</td>
                                <td>Lutron</td>
                                <td>YK-37UVSD</td>
                            </tr>

                            <tr>
                                <td>56</td>
                                <td>SS Weight 2 mg</td>
                                <td>ARD-IN/058</td>
                                <td>Wensar</td>
                                <td>iSwix-VT</td>
                            </tr>

                            <tr>
                                <td>57</td>
                                <td>SS Weight 5 mg</td>
                                <td>ARD-IN/059</td>
                                <td>Wensar</td>
                                <td>iSwix-VT</td>
                            </tr>

                            <tr>
                                <td>58</td>
                                <td>SS Weight 10 mg</td>
                                <td>ARD-IN/060</td>
                                <td>Wensar</td>
                                <td>-</td>
                            </tr>

                            <tr>
                                <td>59</td>
                                <td>Indion lab ultra plus</td>
                                <td>ARD-IN/061</td>
                                <td>INDION</td>
                                <td>LAB Q SMART-50L</td>
                            </tr>

                            <tr>
                                <td>60</td>
                                <td>Indion lab ultra plus Q smart Type -II 50 LPH</td>
                                <td>ARD-IN/062</td>
                                <td>INDION</td>
                                <td>LAB Q SMART-50L</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Infra;