/* ================= TOPIC + SET DATA ================= */
const allTopics = {

cell: {
set1: [
{q:"Which of the following is NOT a part of the structural organisation of a cell?",options:["Cytoplasm","Heart","Mitochondria","Cell wall"],answer:1,exp:"Heart is an organ, not a structural component of a cell."},

{q:"Which of the following is an INCORRECT statement about the endoplasmic reticulum?",options:["The rough endoplasmic reticulum (RER) has ribosomes attached to its surface, which help in protein synthesis.","The endoplasmic reticulum stores genetic material in it.","The endoplasmic reticulum helps in the transport of materials within the cell, especially between the cytoplasm and the nucleus.","The smooth endoplasmic reticulum (SER) is involved in the synthesis of lipids (fat molecules)."],answer:1,exp:"Genetic material is stored in the nucleus, not in the endoplasmic reticulum."},

{q:"Which of the following statements is NOT correct regarding the nucleus?",options:["Nucleus contains chromosomes.","Nuclear membrane is a double-layered structure.","Nuclear membrane is a non-porous and rigid structure.","Nucleus plays a central role in cellular reproduction."],answer:2,exp:"The nuclear membrane contains pores and is not rigid."},

{q:"Each polynucleotide of DNA is made up of small units called _____________.",options:["Nucleotide","Nuclear membrane","Nuclei","Nucleus"],answer:0,exp:"DNA is composed of repeating nucleotide units."},

{q:"_______ are unicellular elongated structures found in epidermal cells that absorb water and minerals from the soil.",options:["Root follicles","guard cells","stomata","hypoderm"],answer:0,exp:"Root follicles (root hairs) absorb water and minerals from the soil."},

{q:"Which type of wall is present in the closed system?",options:["Permeable wall","Semi-permeable wall","Adiabatic wall","Diathermal wall"],answer:2,exp:"An adiabatic wall does not allow heat transfer."},

{q:"Which of the following lacks membrane?",options:["Plant cell","Fungi cell","Viruses","Animal cell"],answer:2,exp:"Viruses are acellular and lack cellular membranes in the usual sense."},

{q:"Select the statement regarding the cytoplasm of a cell that is INCORRECT.",options:["Cytoplasm is the fluid-filled region inside plasma membrane.","Cytoplasm contains many cell organelles.","In a plant cell, cytoplasm is found between cell wall and plasma membrane.","Cytoplasm is present in both eukaryotic and prokaryotic cells."],answer:2,exp:"Cytoplasm lies within the plasma membrane, not between the cell wall and plasma membrane."},

{q:"Genes that control the characteristics of a trait are located on:",options:["chromosomes","vacuoles","endoplasmic reticulum","lysosome"],answer:0,exp:"Genes are located on chromosomes."},

{q:"Plant cell walls are composed of:",options:["cytosol","cytoplasm","glucose","cellulose"],answer:3,exp:"Plant cell walls are primarily made of cellulose."},

{q:"Which of the following scientists made the following statement? 'All cells arise from preexisting cells.'",options:["Rudolf Virchow","Robert Brown","Purkinje","Robert Hooke"],answer:0,exp:"Rudolf Virchow proposed that all cells arise from pre-existing cells."},

{q:"The number of mitochondria in a cell varies depending on which of the following?",options:["The age of the organism","The size of the nucleus","The amount of DNA present in the cell","The physiological activity of the cell"],answer:3,exp:"More active cells generally contain more mitochondria."},

{q:"Why is the plasma membrane called selectively permeable?",options:["It allows only certain substances to pass in or out.","It dissolves unwanted materials.","It allows all substances to pass freely.","It blocks all substances from entering."],answer:0,exp:"The plasma membrane selectively controls movement of substances."},

{q:"The symbol of a battery is:",options:["one long and one short line","a rectangle with arrows","several cells joined together","a circle with a dot"],answer:2,exp:"A battery is represented by several cells joined together."},

{q:"Which of the following activities CANNOT be taken as a defining characteristic of life?",options:["Visible movement like walking or running","Breathing and internal maintenance of cells","Molecular movement within the cells","Growth-related movement of plants"],answer:0,exp:"Visible movement alone is not a defining characteristic of life."},

{q:"The external layer of pollen is made of Exine _________, which is a highly resistant organic matter.",options:["Microcolonin","Intine","Sporopollenin","Microscope Tetraed"],answer:2,exp:"Sporopollenin is a highly resistant organic substance present in the exine of pollen grains."},

{q:"When plant cells lose water by osmosis, the contents shrink away from the cell wall; this process is known as __________.",options:["Diffusion","Plasmolysis","Active Transport","Passive Transport"],answer:1,exp:"Plasmolysis occurs when water leaves a plant cell causing the cytoplasm to shrink."},

{q:"In which part of a neuron is information acquired?",options:["Axon","Dendrite","Cell body","Nerve ending"],answer:1,exp:"Dendrites receive signals and acquire information from other neurons."},

{q:"Meristematic tissue contributes to plant growth because its cells:",options:["Have thick secondary walls","Continuously divide throughout life","Contain large central vacuoles","Are permanently differentiated"],answer:1,exp:"Meristematic cells remain actively dividing throughout life."},

{q:"Select the correct statement related to the characteristics of prokaryotic cell.",options:["It has more than one chromosome.","It has a single chromosome.","Nuclear region is well defined and surrounded by nuclear membrane.","Membrane bound cell organelles are present."],answer:1,exp:"Prokaryotic cells generally possess a single circular chromosome."},

{q:"Variation is useful for the survival of species over time. These variations occur due to errors in:",options:["formation of red blood cells","DNA copying","differentiation of white blood cells","formation of neurons"],answer:1,exp:"Variations arise mainly because of errors during DNA replication."},

{q:"Which of the following explains how vacuoles help maintain the structure of plant cells?",options:["By aiding in cell division","By storing chlorophyll","By providing turgidity and rigidity","By expelling excess water"],answer:2,exp:"Vacuoles maintain turgor pressure which gives rigidity to plant cells."},

{q:"What is the primary function of the cell wall in plant cells?",options:["Control cellular respiration","Transport nutrients","Control cell division","Provide rigidity and protection"],answer:3,exp:"The cell wall provides structural support and protection."},

{q:"The cytoplasmic strands that connect one cell to the other are known as ________.",options:["Spindle Fibre","Endoplasmic Reticulum","Centriole","Plasmodesmata"],answer:3,exp:"Plasmodesmata are channels connecting adjacent plant cells."},

{q:"The principal function of the plasma membrane is to:",options:["Regulate movement of substances across the cell.","Store the cell’s genetic material.","Serve as the site of ATP synthesis.","Provide rigid support and prevent cell swelling."],answer:0,exp:"The plasma membrane selectively regulates movement of materials."},

{q:"Which of the following are present only in plant cells?",options:["Golgi apparatus","Nucleus","Plastids","Mitochondrion"],answer:2,exp:"Plastids are unique to plant cells and absent in animal cells."},

{q:"Which of the following features enables simple squamous epithelium to efficiently carry out diffusion?",options:["Presence of multiple layers of cells","Cells with cilia for movement","Flat, thin, and closely packed cells","Thick cytoplasm with large nuclei"],answer:2,exp:"Its thin structure facilitates rapid diffusion."},

{q:"What similarities do plastids share with mitochondria?",options:["Both contain their own DNA and ribosomes.","Both produce ATPs.","Both are present only in plant cells.","Both contain chlorophyll."],answer:0,exp:"Both plastids and mitochondria possess their own DNA and ribosomes."},

{q:"Which organelle is responsible for photosynthesis in plants?",options:["Mitochondria","Chloroplast","Leucoplast","Chromoplast"],answer:1,exp:"Photosynthesis occurs in chloroplasts."},

{q:"Which cells present in the retina are sensitive to bright and normal light, and gives colour sensation?",options:["Blind cells","Rods or rod shaped cells","Cones or cone shaped cells","Bright cells"],answer:2,exp:"Cone cells are responsible for colour vision and function in bright light."}
],
set2: [
{q:"Which of the following cell organelles have cisterns and is involved in the formation of lysosomes?",options:["Leucoplast","Golgi apparatus","Chromoplast","Mitochondria"],answer:1,exp:"Golgi apparatus contains cisternae and helps in lysosome formation."},

{q:"The part of the muscle which shortens to create contraction is the-",options:["Actin","Epimysium","Fasciculi","Myosin"],answer:0,exp:"Actin filaments slide during muscle contraction causing shortening."},

{q:"A neuron receives nerve impulse from another neuron through ____.",options:["Axon","Synapse","Dendrite","Cell body"],answer:2,exp:"Dendrites receive nerve impulses from other neurons."},

{q:"Which property of connective tissue enables it to bind and support different body parts?",options:["Presence of cilia","Presence of contractile proteins","Presence of extracellular matrix","Presence of nerve endings"],answer:2,exp:"The extracellular matrix provides support and binding functions."},

{q:"Cardiomyocytes rely heavily on which mechanism to maintain their membrane potential and ensure proper contraction?",options:["Passive diffusion through gap junctions only","A combination of voltage-gated ion channels and active ion pumps","Facilitated diffusion of nutrients exclusively","Endocytosis of extracellular fluid"],answer:1,exp:"Cardiac muscle cells depend on ion channels and pumps for electrical activity and contraction."},

{q:"Which of the following are small-sized in animal cells while in plant cells these are very large in size?",options:["Lysosomes","Plastids","Golgi apparatus","Vacuoles"],answer:3,exp:"Plant cells usually have a large central vacuole, whereas animal cell vacuoles are smaller."},

{q:"What is the shape of the Cocci bacteria?",options:["Rod shaped","Spherical","Spiral","Comma-shaped"],answer:1,exp:"Cocci are spherical-shaped bacteria."},

{q:"ATP is broken down giving rise to a fixed amount of energy that can drive the endothermic reactions taking place in which cell organelle of a cell?",options:["Ribosome","Lysosome","Mitochondria","Chloroplast"],answer:2,exp:"Mitochondria are the major sites of ATP production and energy release."},

{q:"______ are the structures found in the epidermis of leaves that regulate the process of transpiration and gaseous transfer.",options:["Striated","Willy","Stomata","Chromatin"],answer:2,exp:"Stomata regulate gas exchange and transpiration in leaves."},

{q:"Who first described the nucleus as a cell organelle in 1831?",options:["Rudolf Virchow","Robert Hooke","Anton van Leeuwenhoek","Robert Brown"],answer:3,exp:"Robert Brown discovered and described the nucleus in 1831."},

{q:"During a nerve impulse transmission, neurotransmitters are released from one neuron and received by another. Which part of neurons are primarily involved in this chemical communication?",options:["Axon terminal → Dendrite of another neuron","Axon → Myelin sheath of nerve","Dendrite → Axon terminal of same neuron","Cell body → Axon of same neuron"],answer:0,exp:"Neurotransmitters travel from the axon terminal of one neuron to the dendrite of another."},

{q:"Which of the following best explains the division of labour seen in multicellular organisms?",options:["Each body part is made up of a single cell","Different cells have specialized functions","All cells perform the same function in an organism","Multicellular organisms have only one type of cell"],answer:1,exp:"Different cell types perform specialized functions in multicellular organisms."},

{q:"Which of the following cell structures helps amoeba to acquire its food material?",options:["Flagella","Nuclear membrane","Plasma membrane","Cilia"],answer:2,exp:"Amoeba engulfs food through extensions of the plasma membrane."},

{q:"Which of the following is the correct function of the Golgi body in a plant cell?",options:["Providing protection to the cell.","Supporting the formation of lysosomes.","Maintaining the shape of the cell.","Helping in the synthesis of proteins."],answer:1,exp:"Golgi bodies package materials and help in lysosome formation."},

{q:"Which cell organelle is responsible for releasing energy in the form of ATP, which enables various metabolic functions in an animal cell?",options:["Endoplasmic reticulum","Mitochondria","Lysosome","Nucleus"],answer:1,exp:"Mitochondria are known as the powerhouse of the cell."},

{q:"The action of transpiration in the leaves is done mainly by __________.",options:["Stomata","Acne","Micro Fibers","Plasmod"],answer:0,exp:"Stomata are the main structures responsible for transpiration in leaves."},

{q:"The dense structure inside the nucleus that produces ribosomes is called the _____.",options:["nucleolus","lysosome","centrosome","mitochondria"],answer:0,exp:"Nucleolus is responsible for ribosome formation."},

{q:"Choose a term to complete the analogy. Apical Meristem : Length :: Lateral Meristem : _____.",options:["Tips of stems","Nodes","Girth","Cell differentiation only"],answer:2,exp:"Lateral meristem increases the girth of plants."},

{q:"Which of the following is NOT correctly matched, with regard to plant and animal cells?",options:["Plastids - Absent in animal cells","Vacuoles - Very large and present in plant cells","Plastids - Present in plant cells","Cell wall - Present in animal cells"],answer:3,exp:"Animal cells do not possess a cell wall."},

{q:"Which of the following is the longest cell in our body?",options:["Nerve cell","Ovum","Blood cell","Fat cell"],answer:0,exp:"Nerve cells are the longest cells in the human body."},

{q:"What conclusion can be drawn from the microscopic observation of onion peel cells?",options:["All onions are made up of similar small structures called cells","Onion bulbs contain different cell types for different functions","Each onion peel contains cells of different composition","The size of the onion decides the shape of its individual cells"],answer:0,exp:"Observations show that onions are made up of many similar cells."},

{q:"Which of the following cell organelles is filled with digestive enzymes and helps to keep the cell clean by digesting any foreign material as well as worn out cell organelles?",options:["Ribosome","Lysosomes","Chloroplast","Chromoplast"],answer:1,exp:"Lysosomes contain digestive enzymes and act as the cell's cleaning system."},

{q:"Which of the following is a primary reason why all multi-cellular organisms do not reproduce by fragmentation?",options:["Their cells are loosely organised.","They are unicellular.","They have a random arrangement of cells.","They have specialised cells organised into tissues and organs."],answer:3,exp:"Complex tissue organization prevents fragmentation-based reproduction."},

{q:"Which of the following statements correctly describes plastids in plant cells?",options:["They are present in both plant and animal cells in equal amount","They are found in prokaryotic cells like bacteria for photosynthesis","They are present only in plant cells and absent in animal cells","They are present only in animal cells and absent in plant cells"],answer:2,exp:"Plastids occur only in plant cells."},

{q:"Which tissue is responsible for transportation of water in plants?",options:["Chloroplast","Ribosome","Xylem","Cytoplasm"],answer:2,exp:"Xylem transports water and minerals in plants."},

{q:"Which of the following statements about lysosomes is correct?",options:["Lysosomes synthesise fats.","Lysosomes contain digestive enzymes.","Lysosomes contain growth hormones.","Lysosomes synthesise proteins."],answer:1,exp:"Lysosomes are membrane-bound sacs containing digestive enzymes."},

{q:"The nucleus is separated from the cytoplasm by ______",options:["Nucleus Wall","Endocrine glands","Cell wall","Nucleus membrane"],answer:3,exp:"The nuclear membrane separates the nucleus from the cytoplasm."},

{q:"Which of the following do not have membrane-bound cell organelles bound to the membrane?",options:["Eukaryotes","Prokaryotes","Prokaryotes and eukaryotes","None of the above"],answer:1,exp:"Prokaryotes lack membrane-bound organelles."},

{q:"Which part of the neuron is responsible for acquiring information?",options:["Dendritic tip","Axon","Cell body","Synapse"],answer:0,exp:"Dendritic tips receive information from receptors or other neurons."},

{q:"Why are vesicles important in the functioning of the Golgi apparatus?",options:["They carry materials to and from the Golgi apparatus","They generate energy needed for packaging in Golgi apparatus","They help in forming the nucleus","They digest waste materials"],answer:0,exp:"Vesicles transport materials between Golgi and other cell structures."},
],
set3: [
{q:"__________ are known as the powerhouse of the cell.",options:["Nucleus","Cytoplasm","Mitochondria","Endoplasmic Reticulum"],answer:2,exp:"Mitochondria produce ATP and are called the powerhouse of the cell."},

{q:"If the concentration of carbon dioxide is higher inside the cell than outside, how will CO₂ move across the plasma membrane?",options:["CO2 will remain inside the cell","CO2 will be converted into oxygen","CO2 will move out of the cell by diffusion","CO2 will move into the cell by active transport"],answer:2,exp:"CO₂ moves from higher concentration to lower concentration by diffusion."},

{q:"Cytoplasm is made up of an aqueous ground substance called:",options:["chromoplasm","nucleoplasm","cytosol","lysosomal fluid"],answer:2,exp:"Cytosol is the aqueous component of cytoplasm."},

{q:"Which of the following outcomes identifies meiosis rather than mitosis?",options:["Many cells, same number","One larger cell, double number","Two identical cells, same number","Four cells, half number"],answer:3,exp:"Meiosis produces four haploid cells with half the chromosome number."},

{q:"_____ is found as chromatin material in a non-dividing cell's structure.",options:["RNA","Nucleus","DNA","Ribosome"],answer:2,exp:"Chromatin mainly consists of DNA in non-dividing cells."},

{q:"A neuron consists of a cell body, a nucleus, and many short, branched parts called ________.",options:["dendrites","villi","flagella","cilia"],answer:0,exp:"Dendrites are short branched projections of neurons."},

{q:"The making of new cells in organisms is called ___________.",options:["Cell secretion","Cell respiration","Cell division","Cell fusion"],answer:2,exp:"New cells are formed through cell division."},

{q:"If lysosomes are also known as the 'suicide bags' of the cell, then which of the following is the powerhouse of the cell?",options:["Endoplasmic reticulum","Mitochondria","Plastids","Vacuoles"],answer:1,exp:"Mitochondria are known as the powerhouse of the cell."},

{q:"Who discovered free living cells in pond water for the first time?",options:["Robert Hooke in 1665","Leeuwenhoek in 1674","Robert Brown in 1831","Virchow in 1855"],answer:1,exp:"Antonie van Leeuwenhoek first observed free-living cells in pond water."},

{q:"Which of the following correctly compares the cell wall and cell membrane in plant and animal cells?",options:["Both plant and animal cells have a cell wall but only plant cells have a cell membrane.","Plant cells have both a rigid cell wall and a cell membrane, while animal cells only have a flexible cell membrane.","Neither plant nor animal cells have a cell wall, but both have a cell membrane.","Animal cells have both a rigid cell wall and a cell membrane, while plant cells only have a flexible cell membrane."],answer:1,exp:"Plant cells have both cell wall and membrane, whereas animal cells have only membrane."},

{q:"Select the statement regarding cell organelles that is INCORRECT.",options:["Each cell organelle performs a special function.","They are found in Prokaryotic cells.","They are found in Eukaryotic cells.","They are membrane-bound structures."],answer:1,exp:"Membrane-bound organelles are absent in prokaryotic cells."},

{q:"Which cell has changing shapes?",options:["Smooth muscle","Nerve cell","Amoeba","Ovum"],answer:2,exp:"Amoeba continuously changes shape using pseudopodia."},

{q:"Plastids are absent in which of the following cells?",options:["Muscle cells","Stem cells","Root cells","Leaf cells"],answer:0,exp:"Animal muscle cells do not contain plastids."},

{q:"Where does the following reaction take place in a cell? The breakdown of glucose, a six-carbon molecule, into a three-carbon molecule.",options:["In the mithochondria","In the nucleus","In the golgi apparatus","In the cytoplasm"],answer:3,exp:"Glycolysis occurs in the cytoplasm."},

{q:"Which of the following characteristics correctly describes skeletal (striated) muscles?",options:["Spindle-shaped, uninucleate cells, involuntary control","Branched, uninucleate cells, involuntary control","Short, cylindrical, branched cells with intercalated discs","Long, cylindrical, unbranched, multinucleate cells, voluntary control"],answer:3,exp:"Skeletal muscles are long, cylindrical, multinucleate and under voluntary control."},

{q:"Which of the following are cells of phloem?",options:["Sieve cells and vessels","Tracheids and vessels","Sieve tubes and companion cells","Tracheids and companion cells"],answer:2,exp:"Phloem is mainly composed of sieve tubes and companion cells."},
{q:"नालंदा कहाँ था?",options:["बिहार","MP","UP","राजस्थान"],answer:0,exp:"बिहार"}
],
set4: [
{q:"समुद्रगुप्त को क्या कहा जाता है?",options:["भारत का नेपोलियन","अशोक","चंद्रगुप्त","हर्ष"],answer:0,exp:"नेपोलियन ऑफ इंडिया"},
{q:"हर्षवर्धन कौन था?",options:["शासक","किसान","व्यापारी","सैनिक"],answer:0,exp:"शासक"}
]
},

animalkingdom: {
set1: [
{q:"In which simple multi-cellular organism does sporangia develop on hyphae and spore formation occurs in sporangia?",options:["Rhizopus","Leishmania","Yeast","Amoeba"],answer:0,exp:"Rhizopus reproduces through spores formed in sporangia present on hyphae."},

{q:"Which of the following are cultivated for the pearls they make?",options:["Sardines","Prawns","Pomfrets","Oysters"],answer:3,exp:"Pearls are produced by oysters and cultivated through pearl culture."},

{q:"Which of the following breeds of cows is resistant to diseases?",options:["Jersey","Red Sindhi","Brown Swiss","Aseel"],answer:1,exp:"Red Sindhi is an indigenous breed known for disease resistance."},

{q:"The members of phylum ________ are exclusively free-living marine animals.",options:["Mollusca","Nematoda","Arthropoda","Echinodermata"],answer:3,exp:"Echinoderms such as starfish and sea urchins are exclusively marine animals."},

{q:"Which of the following animals shows the power of regeneration?",options:["Earthworm","Tick","Planaria","Leech"],answer:2,exp:"Planaria can regenerate a complete body from body fragments."},

{q:"Select a term to complete the given analogy. Binary Fission : Bacteria :: Fragmentation : _________.",options:["Birds","Algae","Mammals","Insects"],answer:1,exp:"Fragmentation is a common mode of reproduction in algae like Spirogyra."},

{q:"In which of the following organisms are chromoplasts present?",options:["Rose","Amoeba","Hydra","Star fish"],answer:0,exp:"Chromoplasts are pigment-containing plastids found in plants like rose."},

{q:"What is the common name of Periplaneta americana?",options:["American Frog","American Cockroach","American Flatworm","American Earthworm"],answer:1,exp:"Periplaneta americana is the scientific name of the American cockroach."},

{q:"Through the phenomenon of biological magnification, which of the following has the maximum concentration of pesticides?",options:["Grasshopper","Grass","Snake","Frog"],answer:2,exp:"Top consumers like snakes accumulate the highest concentration of pesticides."},

{q:"Which single-celled organism divides into many daughter cells simultaneously by multiple fission?",options:["Amoeba","Plasmodium","Yeast","Leishmania"],answer:1,exp:"Plasmodium reproduces asexually through multiple fission."},

{q:"Which of the following causes kala-azar?",options:["Fungi","Virus","Bacteria","Protozoa"],answer:3,exp:"Kala-azar is caused by the protozoan parasite Leishmania."},

{q:"Which of the following organisms does NOT show asexual reproduction by means of fission?",options:["Leishmania","Amoeba","Earthworm","Plasmodium"],answer:2,exp:"Earthworm reproduces sexually and not through fission."},

{q:"Which of these animals has a coat of spines to protect itself?",options:["Giant Panda","Antelope","Reindeer","Hedgehog"],answer:3,exp:"Hedgehogs possess protective spines on their bodies."},

{q:"A poultry farmer wants birds that consume less feed, tolerate high heat, and produce quality chicks. Which strategy should he follow?",options:["Shift to fish farming","Use only indigenous birds","Cross-breed exotic and local poultry","Feed birds twice a day"],answer:2,exp:"Cross-breeding combines desirable traits of both local and exotic breeds."},

{q:"Which of these insects have teeth?",options:["Butterflies","Wasps and Beetles","Flies","Bees"],answer:1,exp:"Many beetles and wasps possess strong chewing mouthparts."}
],
set2: [
{q:"Which of the following organisms shows the phenomenon of regeneration?",options:["Mosquito","Planaria","House fly","Honey bee"],answer:1,exp:"Planaria has remarkable regenerative ability and can regrow its body from fragments."},

{q:"Who/What are the natural hosts of Nipah virus?",options:["Birds","Pigs","Goats","Fruit bats"],answer:3,exp:"Fruit bats of the genus Pteropus are the natural reservoir hosts of Nipah virus."},

{q:"An organism feeding on multiple hosts in its lifetime is called-",options:["Parasitoid","Parasite","Saprophyte","Predator"],answer:3,exp:"Predators feed on multiple prey organisms during their lifetime."},

{q:"In which phylum are the animals warm blooded?",options:["Pisces","Aves","Amphibians","Reptiles"],answer:1,exp:"Birds (Aves) are warm-blooded animals."},

{q:"Which creature usually makes a web to trap its victims?",options:["Cockroach","Caterpillar","Spider","Silkworm"],answer:2,exp:"Spiders spin webs to catch insects and other prey."},

{q:"Which of the following living organisms have bones that help in body movements?",options:["Snake","Cockroach","Earthworm","Snail"],answer:0,exp:"Snakes are vertebrates and possess a skeletal system with bones."},

{q:"The member of which group is usually called a sponge?",options:["Ctenophora","Coelenterata","Porifera","Platyhelminthes"],answer:2,exp:"Animals belonging to phylum Porifera are commonly known as sponges."},

{q:"Use of regenerative cells in the process of budding is present in:",options:["Planaria","Amoeba","Spirogyra","Hydra"],answer:3,exp:"Hydra reproduces by budding using regenerative cells."},

{q:"Hormones are normally absent in-",options:["Rats","Monkeys","Cats","Bacteria"],answer:3,exp:"Bacteria do not possess endocrine glands and hence hormones are absent."},

{q:"Which of the following is/are NOT a parasitic organism?",options:["Ticks","Cuscuta","Amoeba","Lice"],answer:2,exp:"Amoeba is generally free-living and not parasitic in this context."},

{q:"Which of the following is commonly known as the Indian bee?",options:["Apis mellifera","Apis cerana indica","Apis florea","Apis dorsata"],answer:1,exp:"Apis cerana indica is commonly known as the Indian honey bee."},

{q:"In India, cows are classified under which scientific species name?",options:["Bos bubalis","Bubalus bubalis","Bos taurus","Bos indicus"],answer:3,exp:"Indian cattle belong to the species Bos indicus."},

{q:"Which of the following organisms reproduces by binary fission?",options:["Planaria","Spirogyra","Hydra","Amoeba"],answer:3,exp:"Amoeba reproduces asexually through binary fission."},

{q:"In cattle farming, milk-producing buffaloes are called _______.",options:["Broilers","Milch","Layers","Shellfish"],answer:1,exp:"Milch animals are reared primarily for milk production."},

{q:"Which of the following fish production methods are done in the region of Kashmir?",options:["Pearl Culture","Marine Fisheries","Aqua Culture","Brackish Water Fisheries"],answer:2,exp:"Aquaculture is commonly practiced in Kashmir for fish production."}
],
set3: [
{q:"Which creature grows again after it is cut into half?",options:["Earthworm","Cockroach","Lizard","Frog"],answer:0,exp:"Earthworms can regenerate lost body parts to some extent."},

{q:"What distinguishes broilers from layers in poultry farming?",options:["Layers are raised for meat; broilers for eggs","Both are raised equally for meat and eggs","Only broilers lay eggs","Broilers are raised for meat; layers for eggs"],answer:3,exp:"Broilers are bred for meat production while layers are bred for egg production."},

{q:"Ghana Vadya or idiophone instruments are those non-drum percussion musical instruments that do not require any tuning. _________ is an example of a Ghana Vadya.",options:["Pungi","Sarangi","Ghatam","Shehnai"],answer:2,exp:"Ghatam is a traditional clay-pot percussion instrument classified as a Ghana Vadya."},

{q:"Which of the following terms best describes the biological study of animal behaviour?",options:["Ethology","Ethnology","Entomology","Etiology"],answer:0,exp:"Ethology is the scientific study of animal behaviour."},

{q:"Which of the following reproduces by budding?",options:["Algae","Hydra","Mosquito","Liver fluke"],answer:1,exp:"Hydra commonly reproduces asexually through budding."},

{q:"Which of the following is abiotic factor responsible for storage losses in agricultural produce?",options:["Rodents","Moisture","Insects","Fungi"],answer:1,exp:"Moisture is an abiotic factor that can damage stored agricultural products."},

{q:"Sleeping sickness is caused by:",options:["Mosquito","House fly","Sand Fly","Tsetse Fly"],answer:3,exp:"Sleeping sickness is transmitted by the bite of the tsetse fly."},

{q:"Which of the following is related to the study of fungi?",options:["Ornithology","Mycology","Reptilian","Fisheries"],answer:1,exp:"Mycology is the branch of biology that deals with fungi."},

{q:"The poultry birds grown for the purpose of meat production are called _________.",options:["Layers","Broilers","Fowls","Cocks"],answer:1,exp:"Broilers are poultry birds specifically reared for meat production."},

{q:"The constellation Ursa Minor contains the group of stars commonly called the-",options:["Little lion","Big dipper","Hunter","Little dipper"],answer:3,exp:"Ursa Minor is commonly known as the Little Dipper."},

{q:"'A camel is called the ship of the desert' is drawn from the assumption:",options:["Camels have humps","Camels are used for transportation in deserts","Camels are mammals","The shape of a camel is like a ship"],answer:1,exp:"Camels are widely used for transportation across deserts, hence the analogy."},

{q:"Which of the following types of animal husbandry helps us in honey production?",options:["Cattle farming","Culture fishery","Bee-keeping","Poultry"],answer:2,exp:"Bee-keeping (apiculture) is practiced for honey production."},

{q:"In which of the following organisms can individuals change sex, indicating that sex is NOT genetically determined?",options:["Snails","Lizards","Frogs","Ostriches"],answer:0,exp:"Many snails are hermaphroditic and can change sex during their lifetime."},

{q:"Rana tigrina is the scientific name of which animal?",options:["Tiger","Wolf","Leopard","Asian Frog"],answer:3,exp:"Rana tigrina refers to the Indian/Asian bullfrog."},

{q:"Which of the following is a breed of milch animals?",options:["Hallakkar","Nagori","Sahiwal","Harda Wadi"],answer:2,exp:"Sahiwal is a famous Indian milch cattle breed known for high milk yield."},
],
set4: [
{q:"Which of the following is an example of ectoparasite?",options:["Mosquito","Tape worm","Bacteria","Hook worm"],answer:0,exp:"Mosquito lives on the external surface of the host and feeds on blood, making it an ectoparasite."},

{q:"The study of birds is called ________.",options:["Herpetology","Ornithology","Anthropology","Ophthalmology"],answer:1,exp:"Ornithology is the branch of zoology concerned with the study of birds."},

{q:"Which of the following is a host in the life cycle of tape worm?",options:["Pig","Monkey","Fish","Rabbit"],answer:0,exp:"Pig acts as an intermediate host in the life cycle of Taenia solium."},

{q:"Which of the following is NOT an agent of dispersal of seeds?",options:["Wind","Sunlight","Animal","Water"],answer:1,exp:"Sunlight does not help in seed dispersal, whereas wind, animals and water do."},

{q:"Which of the following unicellular organism change their shape?",options:["Yeast","Bacteria","Paramecium","Amoeba"],answer:3,exp:"Amoeba changes its shape continuously using pseudopodia."},

{q:"Animals whose cells are arranged in the embryo layer between the outer and internal membrane, are called ________.",options:["Monoblastic Beast","Triploblastic Beast","Symmetrical animals","Diploblastic Beast"],answer:3,exp:"Diploblastic animals possess two germ layers: ectoderm and endoderm."},

{q:"Which of the following is NOT a class of sub phylum vertebrata?",options:["Arachnida","Mammals","Reptilia","Aves"],answer:0,exp:"Arachnida belongs to Arthropoda, not Vertebrata."},

{q:"'Ichthyophis beddomei', a worm-like amphibian that can swim, belongs to which genus?",options:["Long hind limbs amphibia","Reduced forelimbs amphibia","Limbless amphibia","Short limbs amphibia"],answer:2,exp:"Ichthyophis is a limbless amphibian belonging to the order Gymnophiona."},

{q:"Which of the following organisms has NO genetically predetermined sex?",options:["Human","Dogs","Pigeon","Snail"],answer:3,exp:"Snails can change sex and do not always have genetically fixed sex determination."},

{q:"Which of the following is NOT a marine fish?",options:["Mackerel","Bhetki","Pomfret","Rohu"],answer:3,exp:"Rohu is a freshwater fish, unlike the others which are marine fishes."},

{q:"What is the rearing of honey bees called?",options:["Vermiculture","Apiculture","Silviculture","Sericulture"],answer:1,exp:"Apiculture refers to the rearing and management of honey bees."},

{q:"In which of the following groups of organisms does sex determination occur due to environmental temperature?",options:["Few reptiles","All fishes","All birds","Human beings"],answer:0,exp:"Temperature-dependent sex determination is observed in some reptiles."},

{q:"Which of the following comes under the ‘amphibia’ class of animals?",options:["Pigeon","Turtle","Toad","Cat"],answer:2,exp:"Toads belong to the class Amphibia."},

{q:"To which phylum do round worms belong?",options:["Annelida","Ctenophora","Aschelminthes","Platyhelminthes"],answer:2,exp:"Roundworms are classified under phylum Aschelminthes (Nematoda)."},

{q:"The splitting of the two cells during division can take place in any plane. Such patterns of fission have been observed in which protozoan?",options:["Plasmodium","Leishmania","Hydra","Amoeba"],answer:3,exp:"Amoeba undergoes simple binary fission in any plane."},
],
set5: [
{q:"Mule is a hybrid derived by crossing-",options:["Female donkey and a male horse","Donkey and zebra","Horse and zebra","Male donkey and a female horse"],answer:3,exp:"A mule is produced by crossing a male donkey (jack) with a female horse (mare)."},

{q:"Which animal is known to communicate using infrasound?",options:["Rat","Bat","Rhinoceros","Dolphin"],answer:2,exp:"Rhinoceroses use low-frequency infrasound signals for communication."},

{q:"Which of the following animals has a three-chambered heart?",options:["Sting Ray","Salamander","Rohu","Sparrow"],answer:1,exp:"Amphibians like salamanders possess a three-chambered heart."},

{q:"Which of the following phyla of animals have jointed legs?",options:["Arthropod","Echinodermata","Annelida","Nematode"],answer:0,exp:"Arthropods are characterized by jointed appendages and segmented bodies."},

{q:"Which of the following is an example of endoparasite?",options:["Head lice","Body lice","Ticks","Tape worm"],answer:3,exp:"Tapeworms live inside the host body and are endoparasites."},

{q:"Invertebrates do NOT include:",options:["Molluscs","Reptiles","Arachnids","Insects"],answer:1,exp:"Reptiles are vertebrates because they possess a backbone."},

{q:"Saccharomyces cerevisiae is the scientific name of which of the following?",options:["A species of amoeba","A type of virus","A type of bacteria","A species of yeast"],answer:3,exp:"Saccharomyces cerevisiae is commonly known as baker's yeast."},

{q:"What is the group of fragmented organisms with bilateral symmetry?",options:["Sponge","Annelida","Arthropoda","Mollusca"],answer:1,exp:"Annelids are segmented animals with bilateral symmetry."},

{q:"What happens to the irregularities of the two surfaces which causes static friction?",options:["Sliding","Interlocking","Vanishing","Rolling"],answer:1,exp:"Static friction arises due to interlocking of surface irregularities."},

{q:"Tuberculosis or TB disease is caused by ________.",options:["Protozoa","Fungus","Virus","Bacterial"],answer:3,exp:"Tuberculosis is caused by the bacterium Mycobacterium tuberculosis."},

{q:"Which of these creatures do NOT have teeth?",options:["Turtles","Pigs","Dogs","Horses"],answer:0,exp:"Turtles lack true teeth and instead possess a beak-like structure."},

{q:"Identify the incorrect statement about mammals.",options:["Normally mammals have hair.","Some mammals lay eggs","Heart is three chambered.","Mammary gland is present to feed young ones"],answer:2,exp:"Mammals have a four-chambered heart, not a three-chambered heart."},

{q:"Pisces are exclusively aquatic animals. Which of the following is NOT a characteristic of them?",options:["Their hearts have only two chambers.","They obtain oxygen dissolved in water by using their gills.","They are warm-blooded.","Their skin is covered with scales."],answer:2,exp:"Fishes are cold-blooded animals, not warm-blooded."},

{q:"What is the generic name given to members of the cat family?",options:["Canine","Bovine","Caprine","Feline"],answer:3,exp:"Members of the cat family are collectively referred to as felines."},

{q:"Which of the following is/are used in poultry farming?",options:["Catla","Prawns","Leghorn breed","Sardines"],answer:2,exp:"Leghorn is a well-known poultry breed used for egg production."},
],
set6: [
{q:"Which poultry are birds farmed to produce eggs?",options:["Milch","Broilers","Common carp","Layers"],answer:3,exp:"Layers are poultry birds specially reared for egg production."},

{q:"Which organism uses regenerative cells for reproduction in the process of budding?",options:["Leishmania","Yeast","Amoeba","Hydra"],answer:3,exp:"Hydra reproduces by budding with the help of regenerative cells."},

{q:"Identify the single cell organism.",options:["Amoeba","Seaweed","Leech","Liver fluke"],answer:0,exp:"Amoeba is a unicellular organism."},

{q:"Which of the following organisms does NOT show asexual reproduction by means of fission?",options:["Plasmodium","Earthworm","Amoeba","Leishmania"],answer:1,exp:"Earthworm reproduces sexually and does not reproduce by fission."},

{q:"Which of the following fishes has no head, bone, eyes or nose?",options:["Starfish","Jellyfish","Alaska fish","Cat fish"],answer:0,exp:"Starfish lacks a distinct head, bones, eyes and nose."},

{q:"Pseudopodia are finger-like extensions on:",options:["Amoeba","Paramecium","Earthworms","Hydra"],answer:0,exp:"Amoeba uses pseudopodia for movement and feeding."},

{q:"In which of the following organisms do both fragmentation and spore formation occur?",options:["Amoeba","Planaria","Yeast","Fungi"],answer:3,exp:"Many fungi reproduce through both fragmentation and spore formation."},

{q:"Which of the following groups of organisms exhibit the phenomenon of haploid-dominant life cycle?",options:["The amphibians","The fungi","The angiosperms","The mammals"],answer:1,exp:"Fungi generally show a haploid-dominant life cycle."},

{q:"Which class of vertebrates possesses cold-blooded characteristics and scaly skin?",options:["Reptilia","Mammalia","Aves","Amphibia"],answer:0,exp:"Reptiles are cold-blooded animals with dry scaly skin."},

{q:"Which of the following is NOT classified under Kingdom Animalia?",options:["Metazoa","Protozoa","Choanozoa","Pipiens"],answer:1,exp:"Protozoa are generally placed outside Kingdom Animalia."},

{q:"Some organisms show binary fission by division in any plane but some shows division in a definite orientation. Which of the following shows definite orientation of binary fission?",options:["Paramecium","Leishmania","Plasmodium","Amoeba"],answer:1,exp:"Leishmania divides longitudinally in a definite plane."},

{q:"Which of the following organisms reproduces by budding?",options:["Earthworm","Hydra","Frog","Cockroach"],answer:1,exp:"Hydra reproduces asexually by budding."},

{q:"In a school garden, butterflies often visit flowers while squirrels feed on nuts. What types of consumers are these organisms?",options:["Butterflies – herbivores, Squirrels – herbivores","Butterflies – carnivores, Squirrels – omnivores","Butterflies – parasites, Squirrels – decomposers","Butterflies – omnivores, Squirrels – carnivores"],answer:0,exp:"Both butterflies and squirrels primarily feed on plant products."},

{q:"Which of the following organisms exhibits both autotrophic and heterotrophic modes of nutrition?",options:["Amoeba","Euglena","Plasmodium","Paramecium"],answer:1,exp:"Euglena can photosynthesize and also feed heterotrophically."},

{q:"The common name for Apis florae is:",options:["The giant bee","The dwarf bee","The Asian bee","The little bee"],answer:3,exp:"Apis florea is commonly called the little bee."},
],
set7: [
{q:"Which of the following helps Paramoecium move food to the specific spot in the cell to obtain nutrition?",options:["Parapodia","Cilia","Pseudopodia","Flagella"],answer:1,exp:"Cilia sweep food particles toward the oral groove."},

{q:"What is special about a sword-billed hummingbird?",options:["It is the largest bird in the world","Its bill is longer than rest of its body","It lives only in Antarctica","It cannot fly"],answer:1,exp:"The sword-billed hummingbird has a bill longer than its body."},

{q:"Which organism is a key indicator of a healthy aquatic ecosystem?",options:["Cockroach","Fish","Lichen","Earthworm"],answer:1,exp:"Healthy fish populations often indicate a healthy aquatic ecosystem."},

{q:"What is the modern name of Phillame Colentrates?",options:["Nidaria (jellyfish)","Neemato (Roundcat)","Anilida (Nupurak)","Platyhelminthes (Patti K)"],answer:0,exp:"The modern name of Coelenterata is Cnidaria."},

{q:"Corals are marine invertebrates within the class Anthozoa of the phylum__________.",options:["Arthropoda","Cnidaria","Mollusca","Nematoda"],answer:1,exp:"Corals belong to phylum Cnidaria and class Anthozoa."},

{q:"Which breed of cattle is primarily used for dairy purposes in India?",options:["Sahiwal","Ongole","Gir","Kankrej"],answer:0,exp:"Sahiwal is a well-known dairy breed in India."},

{q:"Which of the following is also known as the 'tree frog'?",options:["Rana tigrina","Hyla","Salamandar","Toad"],answer:1,exp:"Hyla is commonly called the tree frog."},

{q:"Which of the following is a unicellular ciliary organism?",options:["Paramecium","Ticks","Leeches","Amoeba"],answer:0,exp:"Paramecium is a unicellular organism that moves with cilia."},

{q:"Which of the following is NOT known to reproduce through fission?",options:["Hydra","Paramecium","Leishmania","Amoeba"],answer:0,exp:"Hydra reproduces mainly through budding, not fission."},

{q:"Which of the following shows movement but not locomotion?",options:["Dog","Bird","Plant","Human"],answer:2,exp:"Plants show movement but do not move from one place to another."},

{q:"Which of the following is commonly called a sponge?",options:["Nematoda","Coelenterata","Porifera","Platyhelminthes"],answer:2,exp:"Members of phylum Porifera are commonly known as sponges."},

{q:"Animals often blend in with their surroundings for protection. Which of the following do that?",options:["Chameleons","Turtles","Cats","Jerboa"],answer:0,exp:"Chameleons are famous for camouflage."},

{q:"Which organisms cause infectious diseases?",options:["Worms","Viruses","All of the options","Protozoa"],answer:2,exp:"Viruses, protozoa and worms can all cause infectious diseases."},

{q:"Use of regenerative cells in the process of budding is present in:",options:["Planaria","Amoeba","Spirogyra","Hydra"],answer:3,exp:"Hydra reproduces by budding using regenerative cells."},

{q:"A government scheme promotes the rearing of fish in artificially controlled freshwater ponds. What is this type of fishing called?",options:["Culture fishing","Capture fishing","Marine fishing","Saltwater fishing"],answer:0,exp:"Culture fishing involves rearing fish under controlled conditions."},
],
set8: [
{q:"Seeds that are dispersed by animals often:",options:["have hooks or edible flesh","are very small and light weight","can float easily in water","have wings or parachutes"],answer:0,exp:"Seeds dispersed by animals often have hooks or fleshy fruits that attract animals."},

{q:"In which of the following organisms is spore formation seen?",options:["Paramecium","Plasmodium","Amoeba","Rhizopus"],answer:3,exp:"Rhizopus reproduces asexually through spore formation."},

{q:"Which of the following is the carrier of dengue virus?",options:["Male Anopheles Mosquito","Female Aedes Mosquito","Male Andes Mosquito","Female Anopheles Mosquito"],answer:1,exp:"Dengue is transmitted by the female Aedes mosquito."},

{q:"Which one of the following is addressed as 'Alfalfa'?",options:["Fossils","Memel","Sativa","Fish"],answer:2,exp:"Alfalfa refers to Medicago sativa."},

{q:"Which bee variety is commonly known as the Indian bee and is used for commercial honey production?",options:["Apis mellifera","Apis dorsata","Apis florae","Apis cerana indica"],answer:3,exp:"Apis cerana indica is known as the Indian bee."},

{q:"Which of the following organisms have three-chambered hearts?",options:["Mammals","Birds","Amphibians","Fishes"],answer:2,exp:"Most amphibians possess a three-chambered heart."},

{q:"Which of the following organisms may help in pollination of a flower?",options:["Honey bee","Amoeba","Plasmodium","Euglena"],answer:0,exp:"Honey bees are important pollinators."},

{q:"Name the only bird that can fly backwards.",options:["Penguin","Wood pecker","Sparrow","Humming Bird"],answer:3,exp:"Hummingbirds can fly backward due to their unique wing movement."},

{q:"Which of the following is a popular marine fish variety found in India?",options:["Mrigal","Pomfret","Catla","Rohu"],answer:1,exp:"Pomfret is a well-known marine fish in India."},

{q:"Which of the following animals produces infrasound?",options:["Horses and cows","Birds and snakes","Dogs and cats","Whales and elephants"],answer:3,exp:"Whales and elephants communicate using infrasound."},

{q:"Which one of the following insects cannot be called a ‘social insect’?",options:["Bees","Crickets","Termites","Ants"],answer:1,exp:"Crickets do not live in organized social colonies like ants, bees, and termites."},

{q:"Leech belongs to the phylum:",options:["annelida","platyhelminthes","mollusca","protochordata"],answer:0,exp:"Leeches are segmented worms belonging to phylum Annelida."},

{q:"The term ‘Sericulture’ is related to which of the following?",options:["Silk farming","Fish farming","Bird farming","Bee farming"],answer:0,exp:"Sericulture is the rearing of silkworms for silk production."},

{q:"Which of the following organisms will accumulate maximum concentration of DDT?",options:["Goat","Spider","Grass","Human"],answer:3,exp:"Due to biological magnification, humans may accumulate the highest concentration."},

{q:"In which organism does cell division or fission lead to the creation of new individuals?",options:["Mammals","Plants","Unicellular organisms","Reptiles"],answer:2,exp:"In unicellular organisms, cell division directly produces new individuals."},
],
set9: [
{q:"Which breed of cattle is used for two purposes?",options:["Deoni","Saheehwal","Fall","Ongole"],answer:3,exp:"Ongole is considered a dual-purpose cattle breed."},

{q:"What are animals used for tilling, irrigation and carting referred to as?",options:["Milch animals","Wild animals","Draught animals","Carnivorous animals"],answer:2,exp:"Animals used for agricultural work are called draught animals."},

{q:"External fertilisation is found in which of the following organisms?",options:["Fish","Hen","Human","Cow"],answer:0,exp:"Most fishes exhibit external fertilization."},

{q:"Which of the following creatures does NOT usually lay eggs in its own nest?",options:["Sparrow","Cuckoo","Parrot","Pigeon"],answer:1,exp:"The cuckoo lays its eggs in the nests of other birds."},

{q:"'Triticum aestivum' is the scientific name of_____________.",options:["monkey","mango","wheat","human"],answer:2,exp:"Triticum aestivum is the scientific name of common wheat."},

{q:"In fish production, which of the following comes under the category of shellfish?",options:["Bombay duck","Molluscs","Silver carp","Tuna"],answer:1,exp:"Molluscs are classified under shellfish."},

{q:"Which of the following are invertebrates?",options:["Mammals","Arthropods","Reptiles","Fish"],answer:1,exp:"Arthropods are invertebrates because they lack a backbone."},

{q:"Which of the following pairs (Species - Category) is correct with respect to India?",options:["Asiatic Elephant - Endemic","Black Buck - Rare","Great Hornbill - Vulnerable","Nicobar Pigeon - Endangered"],answer:2,exp:"Great Hornbill is categorized as Vulnerable."},

{q:"The fragmentation method of reproduction is shown in ______",options:["Amoeba","Spirogyra","Hydra","Plasmodium"],answer:1,exp:"Spirogyra reproduces asexually through fragmentation."},

{q:"Which of the following organisms reproduce by spore formation?",options:["Earthworm","Hydra","Rhizopus","Leishmania"],answer:2,exp:"Rhizopus reproduces through spores formed in sporangia."},

{q:"Archimedes principle is used to design which of the following?",options:["Cars","Aircraft","Submarines","Trucks"],answer:2,exp:"Submarines operate based on buoyancy principles explained by Archimedes."},

{q:"Which is the second largest phylum among the following?",options:["Mollusca","Arthropoda","Aschelminthes","Annelida"],answer:0,exp:"Mollusca is the second largest animal phylum after Arthropoda."},

{q:"Cutaneous respiration takes place in -",options:["Earthworm","Fish","Man","Birds"],answer:0,exp:"Earthworms respire through their moist skin."},

{q:"The quality and taste of honey mainly depends on which of the following factors?",options:["Age of the bees","Type of beehive","Type and availability of flowers","Number of worker bees in the colony"],answer:2,exp:"Honey quality and flavor largely depend on the floral source available to bees."},
],
set10: [
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
},

circulatorysystem: {
set1: [
{q:"Which chamber of the heart sends deoxygenated blood to the lungs for oxygenation?",options:["Left ventricle","Right atrium","Right ventricle","Left atrium"],answer:2,exp:"The right ventricle pumps deoxygenated blood to the lungs through the pulmonary artery."},

{q:"Which type of blood vessel has thick, elastic walls to withstand high pressure?",options:["Capillary","Vein","Venule","Artery"],answer:3,exp:"Arteries have thick elastic walls to tolerate high blood pressure."},

{q:"On reaching an organ or tissue, arteries divide into smaller and smaller vessels. The smallest vessels have walls that are one cell thick and are called:",options:["Capillaries","Veins","Arteries","Arterioles"],answer:0,exp:"Capillaries are one-cell-thick vessels where exchange of materials occurs."},

{q:"Blood pressure is recorded as two values: _________ pressure, measured when the heart contracts, and ___________ pressure, measured when the heart relaxes.",options:["Systolic; Diastolic","Diastolic; Venous","Maximum; Systolic","Diastolic; Systolic"],answer:0,exp:"Systolic pressure occurs during contraction and diastolic during relaxation."},

{q:"Which of the following correctly explains why veins have valves but arteries do not?",options:["Veins carry blood at low pressure and need valves to prevent backflow","Veins carry blood under high pressure, so valves prevent it from bursting","Arteries carry oxygenated blood and do not need valves","Arteries are located deep inside the body and are supported by muscles"],answer:0,exp:"Valves in veins prevent backflow because blood flows at low pressure."},

{q:"Which of the following carries blood from the heart to the kidneys?",options:["Vena cava","Renal vein","Renal artery","Coronary artery"],answer:2,exp:"The renal artery carries oxygenated blood from the heart to the kidneys."},

{q:"Thicker muscular walls are present in the ventricles of the heart due to which of the following reasons?",options:["To store blood before it enters the atria","To pump blood with high pressure","To receive blood from the body and lungs","To control heartbeat and rhythm"],answer:1,exp:"Ventricles need strong muscular walls to pump blood forcefully."},

{q:"What is the function of insulin in the human body?",options:["It supplies oxygen to the lungs","It regulates the flow of blood","It regulates how the body uses and stores glucose and fat","It supplies filtered blood to the heart"],answer:2,exp:"Insulin regulates glucose metabolism and storage."},

{q:"What is the process by which autotrophs take in substance from outside and in the presence of sunlight, convert them into stored forms of energy?",options:["Circulation","Movement","Digestion","Photosynthesis"],answer:3,exp:"Photosynthesis converts solar energy into chemical energy."},

{q:"Metabolic activities that generate nitrogenous waste material in human being are removed by:",options:["The vascular system","The excretory system","The circulatory system","The respiratory system"],answer:1,exp:"The excretory system removes nitrogenous wastes from the body."},

],
set2: [
{q:"Kidney failure is treated periodically on a kidney machine. The process is known as ________.",options:["Excretion","Metabolism","Hemodialysis","Circulation"],answer:2,exp:"Hemodialysis filters waste products from the blood artificially."},

{q:"The tissue found between the upper and lower epidermis of a bi-cephal leaf is called-",options:["Circulatory System","Mesophil","Answers","Pulp"],answer:1,exp:"Mesophyll tissue lies between the upper and lower epidermis."},

{q:"Which of the following controls bladder pressure?",options:["Kidneys","Heart","Nervous system","Blood Pressure"],answer:2,exp:"The nervous system regulates bladder filling and emptying."},

{q:"Which of the following statements is INCORRECT?",options:["Blood protects the body from disease","Blood carries oxygen from the lungs to the other parts of the body","Blood helps in sensory inputs","Blood carries carbon dioxide from the body cells to the lungs"],answer:2,exp:"Sensory inputs are handled by the nervous system, not blood."},

{q:"AIDS virus destroys the body's -",options:["Red blood corpuscles","Circulatory system","Liver","Immune system"],answer:3,exp:"HIV attacks and weakens the immune system."},

{q:"Which observation best supports the statement that humans have double circulation of blood?",options:["Blood passes through the heart twice in one complete circulation","Blood flows only once through the heart in one complete cycle","Right side of the heart pumps oxygenated blood","Oxygenated and deoxygenated blood mix in the heart"],answer:0,exp:"In double circulation, blood passes through the heart twice in one cycle."},

{q:"Through which of the following structures does urine go into the urinary bladder from kidneys?",options:["Artery","Vein","Vena cava","Ureters"],answer:3,exp:"Ureters carry urine from the kidneys to the urinary bladder."},

{q:"What is the function of plasma in human blood?",options:["It carries oxygen from lungs to all parts of the body","It maintains the oxygen-rich blood supply to tissues","It transports food, carbon dioxide and waste materials","It helps in clotting blood during injuries"],answer:2,exp:"Plasma transports nutrients, wastes, hormones and gases."},

{q:"Which of the following is NOT a part of the circulatory system?",options:["Large intestine","Blood","Heart","Arteries"],answer:0,exp:"The large intestine belongs to the digestive system."},

{q:"Where does the oxygen-rich blood from the lungs come into the heart?",options:["The pulmonary arteries","The left ventricle","The pulmonary veins","The left atrium"],answer:3,exp:"Pulmonary veins bring oxygenated blood to the left atrium."},
],
set3: [
{q:"Which of the following statements correctly describes the transportation of blood from the heart to the lungs?",options:["Deoxygenated blood is pumped from the left ventricle to the lungs","Oxygenated blood is carried from the lungs to the right atrium","Oxygenated blood flows from the left ventricle to the lungs for purification","Deoxygenated blood is pumped from the right ventricle to the lungs"],answer:3,exp:"The right ventricle sends deoxygenated blood to the lungs."},

{q:"Which of the following statements is NOT TRUE about fishes?",options:["Fishes have only two chambers to their hearts","Blood goes only once in one cycle through the heart of a fish","Fishes have double circulation","Blood is pumped through the fishes' gills and gets oxygenated"],answer:2,exp:"Fishes show single circulation, not double circulation."},

{q:"Why do epithelial tissues have very little space between their cells?",options:["To facilitate movement of muscles","To enable them to transmit electrical signals","To create an effective barrier regulating permeability of substances","To allow rapid blood flow"],answer:2,exp:"Closely packed cells form a protective barrier."},

{q:"Blood pressure is the force:",options:["Inside the veins","Inside the artery during ventricular diastole","Inside the artery during ventricular systole","That blood exerts against the wall of a vessel"],answer:3,exp:"Blood pressure is the force exerted by blood on vessel walls."},

{q:"Which of the following is the main function of skeletal muscles in a human body?",options:["Movement in our body","Circulation","Excretion","Respiration"],answer:0,exp:"Skeletal muscles help in body movement and locomotion."},

{q:"If the bicuspid (mitral) valve fails to close properly, which immediate effect is most likely during ventricular contraction?",options:["Backflow of blood from the left ventricle to the left atrium","Backflow of blood from the right ventricle to the right atrium","Mixing of oxygenated and deoxygenated blood in the ventricles","Reduced flow of blood to the lungs"],answer:0,exp:"Mitral valve failure causes blood to flow back into the left atrium."},

{q:"Which of the following is the primary use of ultrasound in echocardiography?",options:["Examine the structure and function of the heart","Cleaning or removing arterial blockages","Measuring blood sugar levels","Determining body weight"],answer:0,exp:"Echocardiography uses ultrasound to visualize heart structure and function."},

{q:"Which blood vessel carries oxygenated blood from the lungs to the heart?",options:["Pulmonary artery","Pulmonary vein","Aorta","Vena cava"],answer:1,exp:"Pulmonary vein is the only vein that carries oxygenated blood."},

{q:"Which chamber of the human heart has the thickest muscular wall?",options:["Right atrium","Left atrium","Right ventricle","Left ventricle"],answer:3,exp:"Left ventricle pumps blood to the entire body and has the thickest wall."},

{q:"The pacemaker of the human heart is:",options:["AV node","Bundle of His","SA node","Purkinje fibers"],answer:2,exp:"The sinoatrial (SA) node initiates and regulates heartbeat."},
],
set4: [
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"},
{q:"राजस्थान?",options:["रेगिस्तान","पहाड़","नदी","समुद्र"],answer:0,exp:"रेगिस्तान"}
]
},

april: {
set1: [
{q:"लोकसभा?",options:["निचला सदन","उच्च सदन","न्यायालय","राज्य"],answer:0,exp:"लोकसभा"},
{q:"प्रधानमंत्री?",options:["सरकार प्रमुख","राज्यपाल","राष्ट्रपति","जज"],answer:0,exp:"सरकार प्रमुख"}
],
set2: [
{q:"राष्ट्रपति?",options:["राज्य प्रमुख","सैनिक","किसान","व्यापारी"],answer:0,exp:"राज्य प्रमुख"},
{q:"संविधान?",options:["कानून","धर्म","नदी","योजना"],answer:0,exp:"कानून"}
],
set3: [
{q:"न्यायपालिका?",options:["न्याय देती","कानून बनाती","टैक्स","सेना"],answer:0,exp:"न्याय देती"},
{q:"संसद?",options:["कानून बनाती","न्याय देती","लड़ाई","व्यापार"],answer:0,exp:"कानून बनाती"}
],
set4: [
{q:"मौलिक अधिकार?",options:["6","5","7","8"],answer:0,exp:"6"},
{q:"लोकतंत्र?",options:["जनता शासन","राजा","सेना","धर्म"],answer:0,exp:"जनता शासन"}
]
},

may: {
set1: [
{q:"गंगा कहाँ से?",options:["गंगोत्री","यमुना","सतलुज","नर्मदा"],answer:0,exp:"गंगोत्री"},
{q:"भारत राज्य?",options:["राजस्थान","नेपाल","चीन","भूटान"],answer:0,exp:"भारत"}
],
set2: [
{q:"सबसे बड़ा राज्य?",options:["राजस्थान","बिहार","UP","MP"],answer:0,exp:"राजस्थान"},
{q:"डेल्टा?",options:["सुंदरबन","थार","हिमालय","घाट"],answer:0,exp:"सुंदरबन"}
],
set3: [
{q:"नदी?",options:["गंगा","थार","हिमालय","रेगिस्तान"],answer:0,exp:"गंगा"},
{q:"मरुस्थल?",options:["थार","गंगा","यमुना","नर्मदा"],answer:0,exp:"थार"}
],
set4: [
{q:"भारत?",options:["लोकतंत्र","राजशाही","तानाशाही","साम्राज्य"],answer:0,exp:"लोकतंत्र"},
{q:"राजधानी?",options:["नई दिल्ली","मुंबई","पटना","कोलकाता"],answer:0,exp:"नई दिल्ली"}
]
},

june: {
set1: [
{q:"संविधान लागू?",options:["1950","1947","1952","1942"],answer:0,exp:"1950"},
{q:"लोकसभा?",options:["निचला","उच्च","न्यायालय","राज्य"],answer:0,exp:"निचला"}
],
set2: [
{q:"COP-29?",options:["जलवायु","युद्ध","व्यापार","कृषि"],answer:0,exp:"जलवायु"},
{q:"जलवायु सम्मेलन?",options:["COP","G20","BRICS","NATO"],answer:0,exp:"COP"}
],
set3: [
{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"},
{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"}
],
set4: [
{q:"बिहार विजन 2047?",options:["विकास","युद्ध","राजनीति","धर्म"],answer:0,exp:"विकास"},
{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"}
]
},

july: {set1:[{q:"बिहार?",options:["राज्य","देश","जिला","नगर"],answer:0,exp:"राज्य"},{q:"गंगा?",options:["नदी","पहाड़","रेगिस्तान","झील"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"राजस्थान?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"भारत?",options:["देश","राज्य","नगर","जिला"],answer:0,exp:"देश"},{q:"कोसी?",options:["नदी","पहाड़","झील","घाट"],answer:0,exp:"नदी"}],
set4:[{q:"डेल्टा?",options:["भूमि","जल","आग","हवा"],answer:0,exp:"भूमि"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}]
},

august: {set1:[{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"},{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकसभा?",options:["सदन","नदी","देश","राज्य"],answer:0,exp:"सदन"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

september: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

october: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

november: {set1:[{q:"गंगा?",options:["नदी","पहाड़","झील","रेगिस्तान"],answer:0,exp:"नदी"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}],
set2:[{q:"हिमालय?",options:["पहाड़","नदी","समुद्र","रेगिस्तान"],answer:0,exp:"पहाड़"},{q:"बिहार?",options:["राज्य","देश","नगर","द्वीप"],answer:0,exp:"राज्य"}],
set3:[{q:"थार?",options:["रेगिस्तान","नदी","पहाड़","झील"],answer:0,exp:"रेगिस्तान"},{q:"लोकतंत्र?",options:["जनता","राजा","सेना","धर्म"],answer:0,exp:"जनता"}],
set4:[{q:"संविधान?",options:["कानून","धर्म","नदी","पहाड़"],answer:0,exp:"कानून"},{q:"भारत दिवस?",options:["26 जनवरी","15 अगस्त","2 अक्टूबर","1 मई"],answer:0,exp:"26 जनवरी"}]
},

december: {set1:[{q:"बिहार दिवस?",options:["22 मार्च","15 अगस्त","26 जनवरी","2 अक्टूबर"],answer:0,exp:"22 मार्च"},{q:"गांधी जयंती?",options:["2 अक्टूबर","15 अगस्त","26 जनवरी","1 मई"],answer:0,exp:"2 अक्टूबर"}],
set2:[{q:"COP?",options:["जलवायु","युद्ध","धर्म","राजनीति"],answer:0,exp:"जलवायु"},{q:"भारत नीति?",options:["विकास","युद्ध","कर","सेना"],answer:0,exp:"विकास"}],
set3:[{q:"ONOS?",options:["ज्ञान","टैक्स","सेना","राजनीति"],answer:0,exp:"ज्ञान"},{q:"विजन 2047?",options:["विकास","युद्ध","धर्म","राजनीति"],answer:0,exp:"विकास"}],
set4:[{q:"डिजिटल इंडिया?",options:["टेक","खेती","सेना","धर्म"],answer:0,exp:"टेक"},{q:"भारत?",options:["देश","राज्य","नगर","द्वीप"],answer:0,exp:"देश"}]
}

};

/* ================= GLOBAL ================= */
let currentTopic = "cell";
let currentSet = "set1";
let questions = allTopics[currentTopic][currentSet];

let index = 0;

let selected = {};
let marked = {};
let resultStatus = {};

// Wrong Questions Retry Feature
let wrongQuestions = [];

// Timer
let timer;
let time = 20;

function saveProgress(){
    localStorage.setItem("quizState", JSON.stringify({
        currentTopic,
        currentSet,
        index,
        selected,
        marked,
        time
    }));
}

function loadProgress(){

    const data = localStorage.getItem("quizState");

    if(!data) return false;

    const state = JSON.parse(data);

    currentTopic = state.currentTopic || "january";
    currentSet = state.currentSet || "set1";
    index = state.index || 0;

    selected = state.selected || {};
    marked = state.marked || {};

    time = state.time || 20;

    questions = allTopics[currentTopic][currentSet] || [];

    return true;
}

// ================= ANALYTICS =================
let analytics = {
    total: 0,
    correct: 0,
    wrong: 0,
    negative: 0,
    percentage: 0
};

// Negative marking rule
let negativeMark = 0.25;

/* ================= SAFE INIT ================= */
function initApp(){
    if(!allTopics[currentTopic]){
        currentTopic = Object.keys(allTopics)[0];
    }

    currentSet = Object.keys(allTopics[currentTopic])[0];

    questions = shuffleArray(allTopics[currentTopic][set] || []);

    reset();
}

/* ================= LOAD TOPIC ================= */
function loadTopic(topic){

if(!allTopics[topic]){
alert("Topic not found: " + topic);
return;
}

currentTopic = topic;
currentSet = Object.keys(allTopics[topic])[0];

questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

index = 0;

reset();
updateActiveButtons();
}

/* ================= LOAD SET ================= */
function loadSet(set){

if(!allTopics[currentTopic] || !allTopics[currentTopic][set]){
alert("Set not found: " + set);
return;
}

currentSet = set;
questions = allTopics[currentTopic][currentSet] || [];

index = 0;

reset();
updateActiveButtons();
}

/* ================= RESET ================= */
function reset(){

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

index = 0;
selected = {};
marked = {};
resultStatus = {};
wrongQuestions = [];

clearInterval(timer);

load();
render();
startTimer();
updateActiveButtons();

}

/* ================= LOAD QUESTION ================= */
function load(){

if(!questions.length) return;

let q = questions[index];

document.getElementById("qText").innerText =
"Q" + (index + 1) + ": " + q.q;

document.getElementById("status").innerText =
currentTopic + " | " + currentSet + " | " + (index + 1) + "/" + questions.length;

let box = document.getElementById("options");
box.innerHTML = "";

q.options.forEach((o,i)=>{

let div = document.createElement("div");
div.className = "option";
div.innerText = o;

if(selected[index] === i){
div.classList.add("selected");
}

div.onclick = ()=>{

if(selected[index] === i){
delete selected[index];
} else {
selected[index] = i;
}

saveProgress();

load();
render();

};

box.appendChild(div);

});

updateBar();
}

/* ================= NAV ================= */
function next(){
if(index < questions.length - 1){
index++;

saveProgress();

load();
render();
startTimer();
}else{
submitQuiz();
}
}

function prev(){
if(index > 0){
index--;

saveProgress();

load();
render();
startTimer();
}
}

function mark(){
marked[index] = true;

saveProgress();

render();
}

/* ================= PALETTE ================= */
function render(){

let p = document.getElementById("palette");
p.innerHTML = "";

questions.forEach((q,i)=>{

let b = document.createElement("div");
b.className = "qbtn";
b.innerText = i + 1;

if(resultStatus[i] === "correct"){
b.classList.add("correct");
b.innerHTML = i + 1 + " ✔";
}
else if(resultStatus[i] === "wrong"){
b.classList.add("wrong");
b.innerHTML = i + 1 + " ❌";
}
else if(marked[i]){
b.classList.add("marked");
}
else if(selected[i] !== undefined){
b.classList.add("answered");
}

b.onclick = ()=>{
index = i;
load();
render();
startTimer();
};

p.appendChild(b);
});
}

/* ================= PROGRESS ================= */
function updateBar(){
document.getElementById("bar").style.width =
((index + 1) / questions.length) * 100 + "%";
}

/* ================= TIMER ================= */
function startTimer(){

clearInterval(timer);

time = 20;

timer = setInterval(()=>{

time--;
saveProgress();

document.getElementById("timerText").innerText = "⏳ " + time;
document.getElementById("timerBar").style.width = (time/20)*100 + "%";

if(time <= 0){
next();
}

},1000);
}

/* ================= SUBMIT ================= */
function submitQuiz(){

clearInterval(timer);

let score = 0;
resultStatus = {};
wrongQuestions = [];

questions.forEach((q,i)=>{

if(selected[i] === q.answer){
score++;
resultStatus[i] = "correct";
}else{
resultStatus[i] = "wrong";
wrongQuestions.push(q);
}
localStorage.removeItem("quizState");

});


document.getElementById("quizBox").style.display = "none";
document.getElementById("resultBox").style.display = "block";

let percent = Math.round((score / questions.length) * 100);

document.getElementById("scoreText").innerHTML =
`<h3>Score: ${score}/${questions.length}</h3>
<h3>Percentage: ${percent}%</h3>
<button onclick="retryWrongQuestions()">
🔄 Retry Wrong Questions (${wrongQuestions.length})
</button>`;

let rev = document.getElementById("review");
rev.innerHTML = "";

questions.forEach((q,i)=>{

let div = document.createElement("div");

let userAnswer = selected[i];
let isCorrect = userAnswer === q.answer;

div.className = isCorrect ? "result-correct" : "result-wrong";

div.innerHTML =
"<b>Q:</b> " + q.q +
"<br><b>Your Answer:</b> " +
(userAnswer !== undefined ? q.options[userAnswer] : "<span style='color:gray'>Not Attempted</span>") +
"<br><b>Correct Answer:</b> <span class='correct-answer'>" + q.options[q.answer] + "</span>" +
"<br><b>Explanation:</b> " + q.exp +
"<hr>";

rev.appendChild(div);

});

render();
}

/* ================= RETRY ================= */
function retryWrongQuestions(){

if(!wrongQuestions.length){
alert("🎉 कोई गलत प्रश्न नहीं है");
return;
}

questions = [...wrongQuestions];

index = 0;
selected = {};
marked = {};
resultStatus = {};

clearInterval(timer);

document.getElementById("resultBox").style.display = "none";
document.getElementById("quizBox").style.display = "block";

load();
render();
startTimer();
}

/* ================= SAFE INIT ================= */
function initApp() {
    // अगर current topic मौजूद नहीं है तो पहला topic set करो
    if (!allTopics[currentTopic]) {
        currentTopic = Object.keys(allTopics)[0];
    }

    // उस topic का पहला set auto select करो
    currentSet = Object.keys(allTopics[currentTopic])[0];

    // ✔️ IMPORTANT FIX: "set" नहीं, currentSet use करना है
    questions = shuffleArray(allTopics[currentTopic][currentSet] || []);

    index = 0;

    reset();
}

function updateActiveButtons(){

    // TOPIC BUTTONS (MONTHS)
    document.querySelectorAll(".topic-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.topic === currentTopic) {
            b.classList.add("active-btn");
        }
    });

    // SET BUTTONS
    document.querySelectorAll(".set-btn").forEach(b => {
        b.classList.remove("active-btn");

        if (b.dataset.set === currentSet) {
            b.classList.add("active-btn");
        }
    });

}


document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const topic = btn.getAttribute("data-topic");
        loadTopic(topic);
    });
});

document.querySelectorAll(".set-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const set = btn.getAttribute("data-set");
        loadSet(set);
    });
});

function shuffleArray(arr){
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

window.onload = () => {

    if(loadProgress()){

        load();
        render();
        startTimer();
        updateActiveButtons();

    }else{

        initApp();

    }

};

// TOPIC BUTTON CLICK
document.querySelectorAll(".topic-btn").forEach(btn=>{
    btn.onclick = () => loadTopic(btn.dataset.topic);
});

// SET BUTTON CLICK
document.querySelectorAll(".set-btn").forEach(btn=>{
    btn.onclick = () => loadSet(btn.dataset.set);
});