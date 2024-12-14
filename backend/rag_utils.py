from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import MongoDBAtlasVectorSearch
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

async def setup_rag():
    embeddings = OpenAIEmbeddings()
    vector_store = MongoDBAtlasVectorSearch(
        collection=db.documents,
        embedding=embeddings,
        index_name="default"
    )
    
    retriever = vector_store.as_retriever()
    qa_chain = RetrievalQA.from_chain_type(
        llm=OpenAI(),
        chain_type="stuff",
        retriever=retriever
    )
    return qa_chain
